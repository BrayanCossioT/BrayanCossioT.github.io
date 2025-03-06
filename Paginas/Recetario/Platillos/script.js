const dishes = {
    sopas: ["Caldo de gallina", "Chupe de camarones", "Parihuela", "Sopa criolla", "Shambar", "Aguadito de pollo"],
    marina: ["Ceviche", "Tiradito", "Leche de tigre", "Arroz con mariscos", "Sudado de pescado", "Jalea"],
    criolla: ["Lomo saltado", "Ají de gallina", "Seco de res", "Cau cau", "Carapulcra", "Tacu Tacu"],
    sierra: ["Pachamanca", "Huatia", "Trucha frita", "Chairo", "Cuy chactado", "Locro de zapallo"],
    selva: ["Tacacho con cecina", "Juane", "Inchicapi", "Patarashca", "Timbuche", "Cecina con plátano"],
    postres: ["Suspiro a la limeña", "Mazamorra morada", "Arroz con leche", "Turrón de Doña Pepa", "Picarones"],
    bebidas: ["Chicha morada", "Chicha de jora", "Pisco Sour", "Emoliente", "Aguajina", "Camu camu"]
};

function showRandomDish(category) {
    const randomDish = dishes[category][Math.floor(Math.random() * dishes[category].length)];
    document.getElementById("dish-name").innerText = `Plato seleccionado: ${randomDish}`;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
const images = ["Img/Cevivhe.jpg", "Img/Juane.jpg", "Img/Pachamanca.jpg"];
let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 3000); // Cambia la imagen cada 3 segundos
changeBackground(); // Establece la primera imagen al cargar la página
