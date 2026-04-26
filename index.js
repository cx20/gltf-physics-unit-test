const GLTF_PHYSICS_REPOSITORY = "https://github.com/eoineoineoin/glTF_Physics";
const GLTF_PHYSICS_RAW_BASE_URL = "https://raw.githubusercontent.com/eoineoineoin/glTF_Physics/master/tests";
const GLTF_PHYSICS_SAMPLES_SAMPLELIST_URL = "https://raw.githubusercontent.com/eoineoineoin/glTF_Physics/master/samples/samplelist.json";
const ENGINE_BASE_URL = 'https://cx20.github.io/gltf-test';

let engines = [{
    name: 'Three.js',
    path: ENGINE_BASE_URL + '/examples/threejs/index.html'
}, {
    name: 'Babylon.js',
    path: ENGINE_BASE_URL + '/examples/babylonjs/index.html'
}, {
    name: 'Filament',
    path: ENGINE_BASE_URL + '/examples/filament/index.html'
}, {
    name: 'PlayCanvas',
    path: ENGINE_BASE_URL + '/examples/playcanvas/index.html'
}, {
    name: 'Cesium',
    path: ENGINE_BASE_URL + '/examples/cesium/index.html'
}, {
    name: 'ArcGISJSAPI',
    path: ENGINE_BASE_URL + '/examples/arcgisjsapi/index.html'
}, {
    name: 'AMAPJSAPI',
    path: ENGINE_BASE_URL + '/examples/amapjsapi/index.html'
}, {
    name: 'Grimore.js',
    path: ENGINE_BASE_URL + '/examples/grimoiregl/index.html'
}, {
    name: 'xeogl',
    path: ENGINE_BASE_URL + '/examples/xeogl/index.html'
}, {
    name: 'minimal-gltf-loader',
    path: ENGINE_BASE_URL + '/examples/minimal-gltf-loader/index.html'
}, {
    name: 'Khronos_glTF_Viewer',
    path: ENGINE_BASE_URL + '/examples/khronos-gltf-rv/index.html'
}, {
    name: 'ClayGL',
    path: ENGINE_BASE_URL + '/examples/claygl/index.html'
}, {
    name: 'Hilo3d',
    path: ENGINE_BASE_URL + '/examples/Hilo3d/index.html'
}, {
    name: 'X3DOM',
    path: ENGINE_BASE_URL + '/examples/x3dom/index.html'
}, {
    name: 'CZPG.js',
    path: ENGINE_BASE_URL + '/examples/czpg/index.html'
}, {
    name: 'GLBoost',
    path: ENGINE_BASE_URL + '/examples/glboost/index.html'
}, {
    name: 'RedCube.js',
    path: ENGINE_BASE_URL + '/examples/redcube/index.html'
}, {
    name: 'RedGL',
    path: ENGINE_BASE_URL + '/examples/redgl2/index.html'
}, {
    name: 'Ashes',
    path: ENGINE_BASE_URL + '/examples/ashes3d/index.html'
}, {
    name: 'Unity',
    path: ENGINE_BASE_URL + '/examples/unity/index.html'
}, {
    name: 'pex',
    path: ENGINE_BASE_URL + '/examples/pex/index.html'
}, {
    name: 'Rhodonite',
    path: ENGINE_BASE_URL + '/examples/rhodonite/index.html'
}];

const TEST_FOLDERS = [
    "RigidBodies_ColliderTypeMatrix",
    "RigidBodies_CollisionFilter",
    "RigidBodies_Joint",
    "RigidBodies_Materials",
    "RigidBodies_MotionProperties"
];

let pendingCount = TEST_FOLDERS.length;
let dataSets = [];

function queryEngines() {
    let res = location.search.match(/engines=([\w\.,]+)/);
    if (res && res[1]) {
        let engineDict = {};
        engines.forEach(function(engine) {
            engineDict[engine.name] = engine;
        });
        engines = [];
        res[1].split(',').forEach(function(engineName) {
            let engine = engineDict[engineName];
            if (engine) {
                engines.push(engine);
            }
        });
    }
}

queryEngines();

TEST_FOLDERS.forEach(function(folder) {
    let url = GLTF_PHYSICS_RAW_BASE_URL + "/" + folder + "/Manifest.json";
    $.getJSON(url, function(data) {
        dataSets.push(data);
        pendingCount--;
        if (pendingCount === 0) {
            dataSets.sort(function(a, b) {
                return TEST_FOLDERS.indexOf(a.folder) - TEST_FOLDERS.indexOf(b.folder);
            });
            dataSets.forEach(function(dataSet) {
                makeTable(dataSet);
            });
            fetchSamples();
        }
    });
});

function fetchSamples() {
    $.getJSON(GLTF_PHYSICS_SAMPLES_SAMPLELIST_URL, function(data) {
        makeSamplesSection(data);
    });
}

function makeSamplesSection(samples) {
    var element = document.getElementById("content");

    var h2 = document.createElement('h2');
    let folderLink = document.createElement('a');
    folderLink.textContent = "Samples";
    folderLink.setAttribute('href', GLTF_PHYSICS_REPOSITORY + "/tree/master/samples");
    folderLink.setAttribute('target', '_blank');
    h2.appendChild(folderLink);
    element.appendChild(h2);

    var table = document.createElement('table');
    table.className = "table table-bordered table-sm table-striped";

    var thead = makeSamplesTableHead();
    table.appendChild(thead);

    var tbody = makeSamplesTableBody(samples);
    table.appendChild(tbody);

    element.appendChild(table);
}

function makeSamplesTableHead() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.textContent = "Title";
    tr.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent = "Description";
    tr.appendChild(th2);

    for (let i = 0; i < engines.length; i++) {
        var th = document.createElement('th');
        th.textContent = engines[i].name;
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    return thead;
}

function makeSamplesTableBody(samples) {
    var tbody = document.createElement('tbody');

    for (let i = 0; i < samples.length; i++) {
        let sample = samples[i];
        var tr = document.createElement('tr');

        // Title with link to GitHub
        var tdTitle = document.createElement('td');
        let a = document.createElement('a');
        a.textContent = sample.title;
        a.setAttribute('href', sample.link);
        a.setAttribute('target', '_blank');
        tdTitle.appendChild(a);
        tr.appendChild(tdTitle);

        // Description
        var tdDesc = document.createElement('td');
        tdDesc.textContent = sample.description;
        tr.appendChild(tdDesc);

        // Engine links
        for (let j = 0; j < engines.length; j++) {
            var tdEngine = document.createElement('td');
            let engine = engines[j];
            let viewLink = document.createElement('a');
            let viewUri = engine.path + "?url=" + sample.asset + "&scale=0.5";
            viewLink.textContent = "View";
            viewLink.title = engine.name + " : " + sample.title;
            viewLink.setAttribute('href', viewUri);
            viewLink.setAttribute('target', '_blank');
            tdEngine.appendChild(viewLink);
            tr.appendChild(tdEngine);
        }

        tbody.appendChild(tr);
    }

    return tbody;
}

function makeTable(dataSet) {
    var element = document.getElementById("content");

    var h2 = document.createElement('h2');
    let folder = dataSet.folder;
    let folderLink = document.createElement('a');
    folderLink.textContent = folder;
    folderLink.setAttribute('href', GLTF_PHYSICS_REPOSITORY + "/tree/master/tests/" + folder);
    folderLink.setAttribute('target', '_blank');
    h2.appendChild(folderLink);
    element.appendChild(h2);

    var table = document.createElement('table');
    table.className = "table table-bordered table-sm table-striped";

    var thead = makeTableHead();
    table.appendChild(thead);

    var tbody = makeTableBody(dataSet);
    table.appendChild(tbody);

    element.appendChild(table);
}

function makeTableHead() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.textContent = "Model";
    tr.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent = "Screenshot";
    tr.appendChild(th2);

    for (let i = 0; i < engines.length; i++) {
        var th = document.createElement('th');
        th.textContent = engines[i].name;
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    return thead;
}

function makeTableBody(dataSet) {
    var tbody = document.createElement('tbody');
    let folder = dataSet.folder;

    for (let i = 0; i < dataSet.models.length; i++) {
        let model = dataSet.models[i];
        let fileName = model.fileName;
        var tr = document.createElement('tr');

        // Model name with link to GitHub
        var tdName = document.createElement('td');
        let a = document.createElement('a');
        let uri = GLTF_PHYSICS_REPOSITORY + "/blob/master/tests/" + folder + "/" + fileName;
        a.textContent = fileName;
        a.title = fileName;
        a.setAttribute('href', uri);
        a.setAttribute('target', '_blank');
        tdName.appendChild(a);
        tr.appendChild(tdName);

        // Sample image
        let sampleImageName = model.sampleImageName;
        var tdPic = document.createElement('td');
        if (sampleImageName) {
            let imageUri = GLTF_PHYSICS_RAW_BASE_URL + "/" + folder + "/" + sampleImageName;
            let img = document.createElement('img');
            img.setAttribute('src', imageUri);
            img.setAttribute('width', 128);
            img.setAttribute('height', 128);
            tdPic.appendChild(img);
        }
        tr.appendChild(tdPic);

        for (let j = 0; j < engines.length; j++) {
            var tdEngine = document.createElement('td');
            let engine = engines[j];
            let viewLink = document.createElement('a');
            let viewUri = engine.path + "?url=" + GLTF_PHYSICS_RAW_BASE_URL + "/" + folder + "/" + fileName + "&scale=0.5";
            viewLink.textContent = "View";
            viewLink.title = engine.name + " : " + fileName;
            viewLink.setAttribute('href', viewUri);
            viewLink.setAttribute('target', '_blank');
            tdEngine.appendChild(viewLink);
            tr.appendChild(tdEngine);
        }

        tbody.appendChild(tr);
    }

    return tbody;
}
