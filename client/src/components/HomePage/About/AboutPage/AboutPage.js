import { Header } from '../../../Header/Header';
import { Footer } from '../../../Footer/Footer';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
    return (
        <>
            <Header />

            <div className={styles['about-page']}>
                <div className={styles['intro']}>
                    <div>
                        <p>it's simple</p>
                        <hr />
                        <p>Our mission keeps us focused, our vision drives us and our values dictate how we succeed. To best understand "Infinity inspiration", we invite you to learn about our story...</p>
                    </div>
                    <div>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C-roQQtMjIv6bbIj_q9zbAHaFZ%26pid%3DApi&f=1&ipt=9147cb752cf25f8025b202911abd80fd040bc71182aa7f2c5be81422160abd28&ipo=images" alt="drawing" />
                    </div>
                </div>

                <div className={styles['story']}>
                    <h2>Our Story</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis nemo incidunt minima nostrum in voluptatum iusto saepe ab veniam quae dolorem, illum, nisi est repudiandae doloribus, dolores excepturi explicabo.</p>
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam vero quae provident beatae voluptatum sit? Eligendi porro et voluptatibus saepe ipsum deserunt eaque delectus, veniam explicabo nulla, amet aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a ducimus debitis sunt! Ipsa, earum tenetur debitis nisi asperiores placeat illo? Similique tenetur consectetur numquam suscipit? Saepe provident omnis quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore? Doloremque expedita nulla nobis aliquam recusandae rerum quam tempora cum obcaecati, minima ipsum nihil suscipit similique harum autem saepe dicta!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus similique cupiditate fuga, optio distinctio officiis nisi dolores consectetur tenetur fugiat culpa quam ad molestiae, iusto qui quibusdam assumenda recusandae ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem. Iure dolores quis laborum voluptatem aperiam harum id architecto non magnam animi, voluptas optio nihil ducimus, hic, esse est facere?</p>
                </div>

                <div className={styles['team-work']}>
                    <div>
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis possimus atque eveniet odio!</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut veniam! In soluta iusto doloribus repellat architecto cum nobis fugit facilis optio, tenetur consequuntur iure facere expedita aliquid dolores maiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellat ex assumenda ullam voluptatem vitae, asperiores commodi dignissimos earum expedita beatae quo tenetur blanditiis, velit rerum excepturi nam qui est.</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="working together" />
                    </div>
                </div>

                <div className={styles['more-info']}>
                    <div>
                        <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVtcGxveWVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="team" />
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugiat saepe temporibus aliquam tenetur reiciendis sint esse placeat obcaecati nostrum, numquam ducimus quas provident est reprehenderit! Dignissimos facilis eos unde? </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id, inventore, corrupti magnam blanditiis modi sapiente dolorem, hic eius ipsa itaque harum suscipit iusto quia voluptate magni. Officia, ut facere.</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, harum voluptate fugiat quo minima placeat, sint dolore architecto nam repellendus totam unde, cupiditate excepturi maiores vel repudiandae accusamus quibusdam facere?</p>
                    </div>
                </div>

                <div className={styles['team']}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum unde nulla ab commodi vel optio aspernatur ipsum natus magni soluta aliquid voluptates officiis labore sit ducimus in delectus repellat, est culpa. Perferendis sed earum pariatur eveniet modi illum blanditiis, vel delectus, sint nobis ut quos dicta consectetur. Temporibus blanditiis voluptates quam tenetur fugiat et molestiae incidunt, doloremque tempore assumenda enim ullam? Laboriosam excepturi quo cum nulla tempora, voluptatum officiis doloribus animi soluta rem. Excepturi doloribus temporibus, fugit soluta nam porro quam minus non maiores nemo debitis consequatur voluptatem tempore expedita reiciendis sunt beatae magni perspiciatis eum molestiae voluptates quasi rem?</p>
                    <div>
                        <img src="https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="team" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};