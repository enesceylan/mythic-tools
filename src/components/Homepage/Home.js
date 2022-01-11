import './Home.css';

const Home = () => {

    const socialArr = ['Main', 'Google_Play', 'Appstore', 'Discord', 'Facebook', 'Youtube', 'Instagram', 'Twitter', 'Twitch', 'Reddit']
    const socialURL = ['https://www.mythicheroes.com/',
        'https://play.google.com/store/apps/details?id=com.igg.android.mythicheroes&hl=en&gl=US',
        'https://apps.apple.com/US/app/id1580031550/id1580031550?mt=8',
        'https://discord.com/invite/mythicheroes',
        'https://www.facebook.com/MythicHeroesGlobal/',
        'https://www.youtube.com/channel/UC7g3DTAli5WaVgiDo8p3Hxw',
        'https://www.instagram.com/mythic_heroes/',
        'https://twitter.com/Mythic_Heroes',
        'https://www.twitch.tv/mythicheroes',
        'https://www.reddit.com/r/MythicHeroes/'
    ]
    return (
        <main className='home-container'>
            <img
                src={process.env.PUBLIC_URL + '/assets/Background/Homepage_Banner.png'}
                alt="homepage banner"
                className="home-banner"
            />
            <section className="main-content">
                <h1>Welcome to Mythic Companion</h1>
                <article>
                    <p><strong>Mythic Companion</strong> offers Mythic Heroes Community tools to have easier time to learn more about their favorite heroes, plan their cube progress, and share their team comps with their friends!</p>
                    <br />
                    <p>Join our <a href="https://discord.gg/ZW9JpnNX8Z" target="_blank" rel="noreferrer" >Discord Server</a> to be notified about site updates, give us your suggestions and report bugs!</p>
                </article>
            </section>
            <h3>OFFICIAL MYTHIC HEROES SOCIAL MEDIA</h3>
            <section className="social-media">
                {socialArr.map((social, index) => (
                    <a href={socialURL[index]} target="_blank" key={index} rel='noreferrer'>
                        <img
                            alt={social}
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/social-banner/' +
                                social +
                                '.png'
                            }
                            key={index}
                            className={'social ' + social}

                        />
                    </a>
                ))}

            </section>
        </main>

    );
};

export default Home;
