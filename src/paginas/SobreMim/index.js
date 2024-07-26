import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo={'Sobre Mim'}
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bruno!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Bruno"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <p className={styles.paragrafo}>
                Cras vehicula, mi quis aliquet ornare, felis justo feugiat justo, eget ultricies eros dui quis nisi. Proin at leo cursus, interdum mi vel, venenatis dolor.
            </p>
            <p className={styles.paragrafo}>
                Fusce vitae felis feugiat, venenatis purus a, scelerisque libero. Donec elementum, erat in efficitur auctor, magna quam blandit magna, non varius arcu est at nulla.
            </p>
            <p className={styles.paragrafo}>
                Nullam commodo nibh eu turpis vehicula, at condimentum nisl vehicula. Maecenas sit amet nulla ut est malesuada consectetur.
            </p>
            <p className={styles.paragrafo}>
                Curabitur ac nulla vitae arcu aliquam tincidunt. Aliquam erat volutpat. Vivamus ullamcorper, sapien in facilisis malesuada, arcu lacus feugiat lorem, non tempus sem est sit amet nisi.
            </p>
            <p className={styles.paragrafo}>
                Integer auctor, sem nec auctor ultrices, felis ligula consectetur nulla, vel dignissim lectus risus ut lectus. Sed placerat ligula in neque pharetra, a iaculis lectus viverra.
            </p>


        </PostModelo>
    )
}