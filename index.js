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
    name: 'Babylon.js-Lite',
    path: ENGINE_BASE_URL + '/examples/babylonjs-lite/index.html'
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

// Extra columns per test folder. Each entry defines column headers and a
// per-model values array (indexed by the model order in Manifest.json).
// Source: README.md of each test folder in the eoineoineoin/glTF_Physics repo.
const TEST_FOLDER_METADATA = {
    "RigidBodies_ColliderTypeMatrix": {
        columns: ["Shape Type A", "Shape Type B"],
        rows: [
            ["Sphere", "Sphere"],
            ["Sphere", "Box"],
            ["Sphere", "Capsule"],
            ["Sphere", "Cylinder"],
            ["Sphere", "Convex hull"],
            ["Sphere", "Triangle mesh"],
            ["Box", "Sphere"],
            ["Box", "Box"],
            ["Box", "Capsule"],
            ["Box", "Cylinder"],
            ["Box", "Convex hull"],
            ["Box", "Triangle mesh"],
            ["Capsule", "Sphere"],
            ["Capsule", "Box"],
            ["Capsule", "Capsule"],
            ["Capsule", "Cylinder"],
            ["Capsule", "Convex hull"],
            ["Capsule", "Triangle mesh"],
            ["Cylinder", "Sphere"],
            ["Cylinder", "Box"],
            ["Cylinder", "Capsule"],
            ["Cylinder", "Cylinder"],
            ["Cylinder", "Convex hull"],
            ["Cylinder", "Triangle mesh"],
            ["Convex hull", "Sphere"],
            ["Convex hull", "Box"],
            ["Convex hull", "Capsule"],
            ["Convex hull", "Cylinder"],
            ["Convex hull", "Convex hull"],
            ["Convex hull", "Triangle mesh"],
            ["Triangle mesh", "Sphere"],
            ["Triangle mesh", "Box"],
            ["Triangle mesh", "Capsule"],
            ["Triangle mesh", "Cylinder"],
            ["Triangle mesh", "Convex hull"],
            ["Triangle mesh", "Triangle mesh"]
        ]
    },
    "RigidBodies_CollisionFilter": {
        columns: ["Description"],
        rows: [
            ["Validating CollideWithSystems, single collider case"],
            ["Validating NotCollideWithSystems, single collider case"],
            ["Validating CollideWithSystems, multiple collider case"],
            ["Validating NotCollideWithSystems, multiple collider case"]
        ]
    },
    "RigidBodies_Joint": {
        columns: ["Description"],
        rows: [
            ["Fixed joint"],
            ["Ball and socket joint"],
            ["Hinge joint with free rotation axis = 0"],
            ["Hinge joint with free rotation axis = 1"],
            ["Hinge joint with free rotation axis = 2"],
            ["Prismatic joint"],
            ["Prismatic joint, collision enabled"],
            ["Stiff spring joint"],
            ["Revolute joint with offset center of mass"],
            ["Revolute joint with angular drive"],
            ["Prismatic joint, with linear drive"]
        ]
    },
    "RigidBodies_Materials": {
        columns: ["Description"],
        rows: [
            ["Compare behaviour of high and low restitution materials"],
            ["Validate physics material combine mode"],
            ["Compare behavior of high and low friction materials"]
        ]
    },
    "RigidBodies_MotionProperties": {
        columns: [
            "Gravity Factor",
            "Linear Velocity",
            "Angular Velocity",
            "Is Kinematic",
            "Mass",
            "Inertia"
        ],
        rows: [
            ["0.0", "", "", "", "", ""],
            ["0.0", "[1.0, 0.0, 0.0]", "", "", "", ""],
            ["0.0", "", "[1.0, 0.0, 0.0]", "", "", ""],
            ["0.0", "[0.0, 0.0, 1.0]", "", "", "", ""],
            ["0.0", "", "[0.0, 0.0, 1.0]", "", "", ""],
            ["", "", "", "True", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "1.0", "[0.0, 0.0, 0.0]"]
        ]
    }
};

let pendingCount = TEST_FOLDERS.length;
let dataSets = [];

function queryEngines() {
    let res = location.search.match(/engines=([\w\.,-]+)/);
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

const TAB_KEYS = TEST_FOLDERS.concat(["Samples"]);
buildTabs(TAB_KEYS);

function buildTabs(keys) {
    let tabList = document.getElementById('testTabs');
    let tabContent = document.getElementById('testTabsContent');
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let id = 'tab-' + key.replace(/[^A-Za-z0-9_-]/g, '_');

        let li = document.createElement('li');
        li.className = 'nav-item';
        let a = document.createElement('a');
        a.className = 'nav-link' + (i === 0 ? ' active' : '');
        a.id = id + '-tab';
        a.setAttribute('data-toggle', 'tab');
        a.setAttribute('href', '#' + id);
        a.setAttribute('role', 'tab');
        a.setAttribute('aria-controls', id);
        a.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        a.textContent = key;
        li.appendChild(a);
        tabList.appendChild(li);

        let pane = document.createElement('div');
        pane.className = 'tab-pane fade' + (i === 0 ? ' show active' : '');
        pane.id = id;
        pane.setAttribute('role', 'tabpanel');
        pane.setAttribute('aria-labelledby', id + '-tab');
        tabContent.appendChild(pane);
    }
}

function getTabPane(key) {
    let id = 'tab-' + key.replace(/[^A-Za-z0-9_-]/g, '_');
    return document.getElementById(id);
}

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
    var element = getTabPane("Samples");

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
    let folder = dataSet.folder;
    var element = getTabPane(folder);

    var h2 = document.createElement('h2');
    let folderLink = document.createElement('a');
    folderLink.textContent = folder;
    folderLink.setAttribute('href', GLTF_PHYSICS_REPOSITORY + "/tree/master/tests/" + folder);
    folderLink.setAttribute('target', '_blank');
    h2.appendChild(folderLink);
    element.appendChild(h2);

    var table = document.createElement('table');
    table.className = "table table-bordered table-sm table-striped";

    var thead = makeTableHead(dataSet);
    table.appendChild(thead);

    var tbody = makeTableBody(dataSet);
    table.appendChild(tbody);

    element.appendChild(table);
}

function makeTableHead(dataSet) {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.textContent = "Model";
    tr.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent = "Screenshot";
    tr.appendChild(th2);

    var metadata = TEST_FOLDER_METADATA[dataSet.folder];
    if (metadata) {
        for (let i = 0; i < metadata.columns.length; i++) {
            var thMeta = document.createElement('th');
            thMeta.textContent = metadata.columns[i];
            tr.appendChild(thMeta);
        }
    }

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

        // Metadata columns (Description / Shape Type / motion properties etc.)
        let metadata = TEST_FOLDER_METADATA[folder];
        if (metadata) {
            let row = (metadata.rows && metadata.rows[i]) || [];
            for (let k = 0; k < metadata.columns.length; k++) {
                var tdMeta = document.createElement('td');
                tdMeta.textContent = row[k] != null ? row[k] : "";
                tr.appendChild(tdMeta);
            }
        }

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
