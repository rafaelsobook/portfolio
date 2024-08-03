import React from 'react'
import ProjectBox from './ProjectBox'

const projects = [
    {
        projectName: "Grim Land",
        diplayImages: ["gw.jpg","gw3.jpg", "fight1.jpg", "fight2.jpg"],
        desc: "An enthralling fantasy adventure MMORPG inspired by Reincarnated Anime Series, born from deep love for the genre. After five months of dedicated development, this game invites players to immerse themselves in a medieval swordplay experience unlike any other. With the innovative use of portal keys, players can explore randomly generated scenes filled with mysterious monsters and hidden treasures, ensuring every journey is unique and unpredictable. Additionally, the game features an NFT marketplace where players can trade their hard-earned items, adding a modern and exciting twist to the classic fantasy adventure.",
        ss1:'gw1.jpg',
        ss2:'gw2.jpg',
        ss3:'gw4.jpg'
    },
    {
        projectName: "Dungeon Born",
        diplayImages: ["db1.png",],
        desc: 'Dungeon Born is an exhilarating multiplayer adventure game inspired by the "reincarnated to another world" anime series and developed during the early stages of learning to code. This game challenges players with a high-stakes, one-life system, where caution is paramount. A single misstep into a trap or an encounter with a dungeon enemy can lead to instant death. Designed to encourage careful exploration and strategic thinking, Dungeon Born offers a thrilling and immersive experience where every decision matters.',
        ss1:'db2.jpg',
        ss2:'db3.png',
        ss3:'db4.png'
    },
]

export default function ProjectSection() {
    return (
        <div className="project-container">
            {projects.map((prjt, indx) => <ProjectBox key={indx} detail={prjt} />)}
        </div>
    )
}
