window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            // box
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'white' } );
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);

            // sphere
            const sphere = document.createElement("a-sphere");
            sphere.setAttribute("scale", {
                x: 20,
                y: 20,
                z: 20
            });
            sphere.setAttribute('material', { color: 'yellow' } );
            sphere.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(sphere);
        }
        testEntityAdded = true;
    });
};