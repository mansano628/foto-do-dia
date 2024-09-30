const images = [
    { src: 'imagem1.jpg', description: 'Curtindo uma piscininha em Massayo' },
    { src: 'imagem2.jpg', description: 'Aesthetic no carro' },
    { src: 'imagem3.jpg', description: 'Casal bonito' },
    { src: 'imagem4.jpg', description: 'Casal bonito combinando' },
    { src: 'imagem5.jpg', description: 'Muito lindo nossos olhares' },
    { src: 'imagem6.jpg', description: 'Lindos curtindo uma piscina' },
    { src: 'imagem7.jpg', description: 'S2 nois S2' },
    { src: 'imagem8.jpg', description: 'Pós primeiros 5km (você morrendo)' },
    { src: 'imagem9.jpg', description: 'Banho de sol bem chiques' },
    { src: 'imagem10.jpg', description: 'Sorriso e beijo' },
    { src: 'imagem11.jpg', description: 'Eu querendo te comer' },
    { src: 'imagem12.jpg', description: 'Filminho' },
    { src: 'imagem13.jpg', description: 'Coração kkkk' },
    { src: 'imagem14.jpg', description: 'Foto bonita ' },
    { src: 'imagem15.jpg', description: 'Combinando sempre ' },
    { src: 'imagem16.jpg', description: 'Amo-te' },
    { src: 'imagem17.jpg', description: 'Te amo minha corredora' },
    { src: 'imagem18.jpg', description: 'Nessa a gente tava bonito' },
    { src: 'imagem19.jpg', description: 'Boa foto' },
    { src: 'imagem20.jpg', description: 'Fofos' },
    { src: 'imagem21.jpg', description: 'Nosso amigo' },
    { src: 'imagem22.jpg', description: 'Prainha' },
    { src: 'imagem23.jpg', description: 'EITA FOTO BONITA' },
    { src: 'imagem24.jpg', description: 'S2' },
    { src: 'imagem25.jpg', description: 'Olha você toda linda' },
    { src: 'imagem26.jpg', description: 'Queria repetir essa foto só que sem ninguém atrás' },
    { src: 'imagem27.jpg', description: 'Fotão' },
    { src: 'imagem28.jpg', description: 'Amo nossa tradição de sempre escovar os dentes juntos' },
    { src: 'imagem29.jpg', description: 'Onde tudo começou!' },
    { src: 'imagem30.jpg', description: 'Olha nossa carinha, parece que éramos crianças' },
    { src: 'imagem31.jpg', description: 'Eu te amando desde sempre' },
    { src: 'imagem32.jpg', description: 'Você desde sempre uma gata' },
    { src: 'imagem33.jpg', description: 'Pena que você não gosta dessa foto' },
    { src: 'imagem34.jpg', description: 'Festinha' },
    { src: 'imagem35.jpg', description: 'Beijinho' },
    { src: 'imagem36.jpg', description: 'Casal bobo' },
    { src: 'imagem37.jpg', description: 'Gosto dessa foto' },
    { src: 'imagem38.jpg', description: 'Narizinho vs narigão' },
    { src: 'imagem39.jpg', description: 'Nois bobos' },
    { src: 'imagem40.jpg', description: 'Te amo minha vida' },
    { src: 'imagem41.jpg', description: 'Muito santistas' },
    { src: 'imagem42.jpg', description: 'Amo esse casal' },
    { src: 'imagem43.jpg', description: 'Minha super-corredora' },
    { src: 'imagem44.jpg', description: 's2' },
    { src: 'imagem45.jpg', description: 'Combinandos' },
    { src: 'imagem46.jpg', description: 'Gêmeos' },
    { src: 'imagem47.jpg', description: 'Mtando a saudade' },
    { src: 'imagem48.jpg', description: 'Minha maior companheira' },
    { src: 'imagem49.jpg', description: 'Minha paz' },
    { src: 'imagem50.jpg', description: 'Nem sei onde é isso' },
    { src: 'imagem51.jpg', description: 'Super look combinando' },
    { src: 'imagem52.jpg', description: 'Amo você de paixão' },
    { src: 'imagem53.jpg', description: 'Amo ter você do meu lado' },
    { src: 'imagem54.jpg', description: 'Beijinho gostoso' },
    { src: 'imagem55.jpg', description: 'Você sempre que eu falo qualquer besteira' },
    { src: 'imagem56.jpg', description: 'Nois bunitus' },
    { src: 'imagem57.jpg', description: 'Foto daora' },
    { src: 'imagem58.jpg', description: 'Aesthetic' },
    { src: 'imagem59.jpg', description: 'Amo viajar com você' },
    { src: 'imagem60.jpg', description: 'Amo conhecer lugares novos com você' },
    { src: 'imagem61.jpg', description: 'Nós lindos' },
    { src: 'imagem62.jpg', description: 'Eu te admirando' },
    { src: 'imagem63.jpg', description: 'Viajantes' },
    { src: 'imagem64.jpg', description: 'Eu vou pra qualquer lugar, desde que seja com você' },
    { src: 'imagem65.jpg', description: 'Minha doisinha' },
    { src: 'imagem66.jpg', description: 'PG' },
    { src: 'imagem67.jpg', description: 'Aesthetic' },
    { src: 'imagem68.jpg', description: 'Dois doidos' },
    { src: 'imagem69.jpg', description: 'SAC' },
    { src: 'imagem70.jpg', description: 'Beijinho' },
    { src: 'imagem71.jpg', description: 'Alguém peidou' },
    { src: 'imagem72.jpg', description: 'GRWU' },
    { src: 'imagem73.jpg', description: 'Interlakes' },
    { src: 'imagem74.jpg', description: 'Praia e piscina' },
    { src: 'imagem75.jpg', description: 'Foto chique' },
    { src: 'imagem76.jpg', description: 'Casal lindo' },
    { src: 'imagem77.jpg', description: 'Te amo demais' },
    { src: 'imagem78.jpg', description: 'Essa foto é muito bonita' },
    { src: 'imagem79.jpg', description: 'Lindos na praia' },
    { src: 'imagem80.jpg', description: 'Bem adultos na praia' },
    { src: 'imagem81.jpg', description: 'Prontos pra sacanagem' },
    { src: 'imagem82.jpg', description: 'Mood dos casais' },
    { src: 'imagem83.jpg', description: 'Eita que casalzão' },
    { src: 'imagem84.jpg', description: 'SFC' },
    { src: 'imagem85.jpg', description: 'Combinando até no treino' },
    { src: 'imagem86.jpg', description: 'Combinando sempre' },
    { src: 'imagem87.jpg', description: 'Nós e a Tina' },
    { src: 'imagem88.jpg', description: 'Eita como minha mulher é linda' },
    { src: 'imagem89.jpg', description: 'Eita' },
    { src: 'imagem90.jpg', description: 'Love u' },
    { src: 'imagem91.jpg', description: 'Combinando D+++' },
    { src: 'imagem92.jpg', description: 'Nois quando nosso namoro era de adolescente' },
    { src: 'imagem93.jpg', description: 'Fofos' },
    { src: 'imagem94.jpg', description: 'Melhor presente do mundo' },
    { src: 'imagem95.jpg', description: 'Eu depois de você acabar comigo' },
    { src: 'imagem96.jpg', description: 'Dormindo juntos separados' },
    { src: 'imagem97.jpg', description: 'GRWU' },
    { src: 'imagem98.jpg', description: 'Nois lindos e o Sol' },
    { src: 'imagem99.jpg', description: 'Sim, eu aceito' },
    { src: 'imagem100.jpg', description: 'Aleatória' },
    { src: 'imagem101.jpg', description: 'Hihi' },
    { src: 'imagem102.jpg', description: 'Eu e minha esfomeada favorita' }
];

const showImageButton = document.getElementById('showImage');
const dailyImageElement = document.getElementById('dailyImage');
const descriptionElement = document.getElementById('description');
const nextDayMessageElement = document.getElementById('nextDayMessage');
const currentDateElement = document.getElementById('currentDate');

// Exibir a data atual na interface
const today = new Date();
currentDateElement.textContent = `Foto do dia: ${today.toLocaleDateString('pt-BR')}`;

// Função para obter a imagem do dia com base na data
function getImageOfTheDay() {
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return images[dayOfYear % images.length];
}

let imageShown = false;

showImageButton.addEventListener('click', () => {
    const imageOfTheDay = getImageOfTheDay();

    if (!imageShown) {
        dailyImageElement.src = `imagens/${imageOfTheDay.src}`;
        dailyImageElement.style.display = 'block';
        descriptionElement.textContent = imageOfTheDay.description;
        descriptionElement.style.display = 'block';
        nextDayMessageElement.style.display = 'none';
        imageShown = true;
    } else {
        nextDayMessageElement.style.display = 'block';
    }
});