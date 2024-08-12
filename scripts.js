// Function to toggle the sidebar menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Function to open the add product modal
function openModal() {
    document.getElementById("addProductForm").style.display = "block";
}

// Function to close the add product modal
function closeModal() {
    document.getElementById("addProductForm").style.display = "none";
}

// Handle form submission
document.getElementById("productForm").onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById("productName").value;
    const description = document.getElementById("productDescription").value;
    const price = document.getElementById("productPrice").value;

    // Create a new product card
    const productCard = document.createElement("div");
    productCard.className = "product";
    
    productCard.innerHTML = `
        <img src="placeholder.png" alt="Product Image">
        <h2>${name}</h2>
        <p>${description}</p>
        <span>$${price}</span>
    `;

    // Add the product card to the product list
    document.querySelector(".products").appendChild(productCard);

    // Close the modal
    closeModal();
};

// 3D Background using Three.js
function init3DBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
}

init3DBackground();
