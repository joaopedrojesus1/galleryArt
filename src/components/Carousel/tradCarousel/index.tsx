import React from "react";

export default function TradCarousel(){
    const slides = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg/1920px-Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg',
            name: 'Leonardo da Vinci'
        },
        {
            url: 'https://cdn.culturagenial.com/imagens/1146px-sandro-botticelli-la-nascita-di-venere-google-art-project-edited-cke.jpg',
            name: 'Sandro Botticelli'
        },
        {
            url: 'https://static.todamateria.com.br/upload/ac/ri/acriacaodeadao-0.jpg',
            name: 'Michelangelo'
        },
        {
            url: 'https://media.gazetadopovo.com.br/2020/10/09141735/Homem-vitruviano-bigstock-960x540.jpg',
            name: 'Leonardo da Vinci'
        },
        {
            url: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/02/1333px-John_Henry_Fuseli_-_The_Nightmare.jpg?quality=100&strip=info&w=1280&h=720&crop=1',
            name: 'Henry Fuseli'
        },
        {
            url: 'https://www.om.nl/binaries/large/content/gallery/om/content-afbeeldingen/parketten/ap-den-haag/mauritshuis-meisje-met-de-parel-03.jpg',
            name: 'Johannes Vermeer'
        },
    ];

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
            <div style={{backgroundImage: `url(${slides[0].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        </div>
    )
}