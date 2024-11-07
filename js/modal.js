function openModal(memberName) {
  const modal = document.getElementById("member-modal");
  const modalName = document.getElementById("modal-name");
  const modalDescription = document.getElementById("modal-description");
  const modalSocials = document.getElementById("modal-socials");

  // Example data, you can replace it with actual data
  const memberData = {
    Aztek138: {
      description:
        "Hello my name is AZTEK and welcome to my temple. Typically i  play games and smoke weed so if you like those 2 things you are pretty much made for my community I also play bored games im hoping to do IRL streams aswell I love to play all kinds games from playstaion to nintendo new or old it dont matter we playing it so come hang out show some love and lets have an amazing time as we grow #TEAMINSPIRE",
      socials: [
        {
          platform: "X",
          url: "https://x.com/Aztek138",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "Instagram",
          url: "#",
          icon: "../img/black-instagram-icon.png",
        },
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@jose_rosas1",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "YouTube",
          url: "https://www.youtube.com/@joserosas3224",
          icon: "../img/youtube-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/aztek138",
          icon: "../img/kick.png",
        },
      ],
    },
    CelticsOnKick3: {
      description:
        "1400/4KT <3 : Ima TikToker - CelticsOnKick : NBA2K & More IF YOU'R READING THIS , I HOPE YOU HAVE A BLESS DAY <3 Remember to alway's hydrate y'all i care about y'all too . MUCH LOVE <3",
      socials: [
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@CelticsOnKick",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/celticsonkick",
          icon: "../img/kick.png",
        },
      ],
    },
    CHOJITHAGREAT: {
      description:
        "JUST A LAYED BACK STREAMER THAT GAMES AND DOES IRL AS OFTEN AS POSSIBLE THANK YOU IF YOU MADE IT THIS FAR OUT THE WAY MERCH IN THE WORKS TO SUPPORT THE CHANNEL JUST VIBE WITH ME SUBS AND DONATIONS DO GO BACK INTO THE COMMUNITY, VIA GIVAWAYS, COMPETITIONS, CHALLENGES, AND MORE DIVERSE CONTENT DONT HATE, BE GREAT!! SPICY LINKS: https://linktr.ee/CHOJITHAGREAT",
      socials: [
        {
          platform: "X",
          url: "https://x.com/CHOJITHAGREAT",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/BLACKCHOJII/",
          icon: "../img/black-instagram-icon.png",
        },
        {
          platform: "YouTube",
          url: "https://www.youtube.com/@CHOJITHAGREAT",
          icon: "../img/youtube-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/chojithagreat",
          icon: "../img/kick.png",
        },
      ],
    },
    Djwhitted: {
      description:
        "From NC, Call me DJ Just walking through life one step at a time. First time streaming, let enjoy this!!!!",
      socials: [
        {
          platform: "Kick",
          url: "https://kick.com/Djwhitted",
          icon: "../img/kick.png",
        },
      ],
    },
    DrKhaosity: {
      description:
        "Not to be funny, but I am a GIRL. I love my games and enjoy sharing my journey. My stream may vary between 7 Days to Die, Minecraft, World of Warcraft, Grounded, Fortnite, or GTA5. You might even see the Sims 4 if I feel like building or you may even see random games if I try something new.",
      socials: [
        {
          platform: "X",
          url: "https://x.com/DrKhaosity",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/drkhaosity/",
          icon: "../img/black-instagram-icon.png",
        },
        {
          platform: "YouTube",
          url: "https://www.youtube.com/@Dr.Khaosity",
          icon: "../img/youtube-icon.png",
        },
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@drkhaosity",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/drkhaosity",
          icon: "../img/kick.png",
        },
      ],
    },
    GodsSonOBJttv: {
      description:
        "A dancer, gamer, entertainer. Spreading positivity and judgment free zone. Here to bring what streaming is missing. My username is Gson because I believe in Gods Son. Enjoy the games and laugh along. WE STILL CLIPY. Join the BlairArmy.. We have snacks😋",
      socials: [
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@GsonBLAIRttv",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/godssonobjttv",
          icon: "../img/kick.png",
        },
      ],
    },
    Hollowbabygirl: {
      description:
        "Heyy Kick Fam welcome in to the channel my name is Hollowbabygirl aka Aimee . I'm 25 gamer girl from South Lousiana just here to make content and meet new people . One day i will finally get a pc so come join the fun",
      socials: [
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@hollowbabygirl",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/hollowbabygirl",
          icon: "../img/kick.png",
        },
      ],
    },
    Josan104: {
      description:
        "24 year old mixed streamer playing a huge variety of games come chill, smoke, drink, talk smack idc",
      socials: [
        {
          platform: "X",
          url: "https://x.com/josan104_kick",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@kick_josan104",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/josan104",
          icon: "../img/kick.png",
        },
      ],
    },
    Lazysniper: {
      description:
        "24 year old mixed streamer playing a huge variety of games come chill, smoke, drink, talk smack idc",
      socials: [
        {
          platform: "X",
          url: "https://x.com/josan104_kick",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "YouTube",
          url: "https://www.youtube.com/@lazylooney2998",
          icon: "../img/youtube-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/lazysniper",
          icon: "../img/kick.png",
        },
      ],
    },
    Mtokes: {
      description: "Some Random Stoner",
      socials: [
        {
          platform: "Kick",
          url: "https://kick.com/mtokes",
          icon: "../img/kick.png",
        },
      ],
    },
    Nexusjd: {
      description:
        "Hey there, folks! I'm NexusJD, but you can call me Nex, JD, or even just Nexus – I'm cool with any of those. I'm a 22-year-old streamer hailing from the South, hustling to support the family while chasing my dreams in the streaming and gaming industry! Follow and Turn Notis on for when i go LIVE! MUCH LOVE BABY!",
      socials: [
        {
          platform: "X",
          url: "https://x.com/nexusxbl",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/nexusjd",
          icon: "../img/black-instagram-icon.png",
        },
        {
          platform: "YouTube",
          url: "https://www.youtube.com/@nexusjd",
          icon: "../img/youtube-icon.png",
        },
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@nexusxbl",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/nexusjd",
          icon: "../img/kick.png",
        },
      ],
    },
    SGN_Gambino: {
      description:
        "Georgia southern boy. 24yo Army vet just here to live life and put a smile on everyone’s faces. I love to have fun and make friends but most importantly, I love bonding with people through video games and supporting the people who support me. Everyone is welcome here! Feel free to suggest new or old games that you would like to see me play so I can make better content for you guys. Feel free to jump in, say hi and drop a follow.",
      socials: [
        {
          platform: "Kick",
          url: "https://kick.com/sgn-gambino",
          icon: "../img/kick.png",
        },
      ],
    },
    Sir_Vive_er: {
      description:
        "COLDWORLD GHOSTRYD3R BiGO ID: SirVive718 Twitch: Sir_Vive_er Kick: Sir_Vive_er",
      socials: [
        {
          platform: "X",
          url: "https://x.com/Sir_Vive_erTTV",
          icon: "../img/x-social-media-black-icon.png",
        },
        {
          platform: "TikTok",
          url: "https://www.tiktok.com/@sir_vive_er",
          icon: "../img/tiktok-icon.png",
        },
        {
          platform: "Kick",
          url: "https://kick.com/sir-vive-er",
          icon: "../img/kick.png",
        },
      ],
    }, // Add more members as needed
  };

  // Set modal content
  modalName.innerText = memberName;
  modalDescription.innerText = memberData[memberName].description;

  // Create social media links
  modalSocials.innerHTML = ""; // Clear previous links
  memberData[memberName].socials.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.url;
    a.target = "_blank"; // Open in new tab
    const img = document.createElement("img");
    img.src = social.icon;
    img.alt = social.platform;
    img.style.width = "30px"; // Set size
    img.style.height = "30px"; // Set size
    a.appendChild(img);
    modalSocials.appendChild(a);
  });

  modal.style.display = "block"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("member-modal");
  modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("member-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
