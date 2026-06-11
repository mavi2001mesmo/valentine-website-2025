const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "André, meu bem",

    // The title that appears in the browser tab
    // You can use emojis! 🧡💜
    pageTitle: "Do you like being my boyfriend? 🧡💜",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🧡💜', '🧡💜', 🧡💜', '🧡💜', '🧡💜'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

@@ -25,15 +25,15 @@ const CONFIG = {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! 🧡💜"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next 🧡💜"                                         // Text for the next button
        },
        third: {
            text: "Do you want to be my boyfriend forever? 🧡💜", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
@@ -42,26 +42,26 @@ const CONFIG = {
    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🧡💜",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🧡💜",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉🧡💜",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🧡💜💝🧡💜💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        backgroundStart: "#462C7D",      // Gradient start (try pastel colors for a soft look)
        buttonBackground: "#D552A3",     // Button color (should stand out against the background)
        buttonHover: "#FF70BF",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#FFF6DE"             // Text color (make sure it's readable!)
    },

    // Animation settings
@@ -78,12 +78,12 @@ const CONFIG = {
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/djpbtlacd/video/upload/v1781203972/1Opening_Nanatsu_no_Taizai_Legendado_BR_Full_bihe8a.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
