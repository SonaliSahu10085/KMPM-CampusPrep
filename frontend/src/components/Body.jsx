import { Loading } from "./Basic"
import { useStore } from "../constants/store"

export default function Body() {
    const { loading } = useStore();

    return (
        <p className="mx-4 sm:mx-20">
            {loading && <Loading/>}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quam ad velit iusto! Minima quaerat praesentium ad doloremque eius. Nisi natus ad ex modi mollitia excepturi quia nesciunt amet non, tempore, magnam sunt distinctio veniam necessitatibus, nobis consequatur ducimus! Fugit aspernatur velit aliquid recusandae qui sed fuga nesciunt beatae. Obcaecati libero laboriosam, commodi maxime sint natus quidem. Quidem iusto maxime nam sed nemo doloribus dolor et, odio fugiat impedit illo id hic quod est laboriosam sint. Reprehenderit ipsum veniam quis soluta adipisci eius repudiandae dolorum. Laborum iusto repudiandae tempore cum eum placeat similique doloribus, a maiores necessitatibus exercitationem rerum at quaerat incidunt, est iure. Quam voluptatem reprehenderit ipsum necessitatibus cupiditate laudantium esse nulla suscipit blanditiis ullam! Sit, nemo nisi eum animi harum minus recusandae maxime asperiores perferendis? Maiores, quos. Et vero animi, natus dicta, deserunt provident ex qui perspiciatis commodi quibusdam, nesciunt inventore. Magni natus iure doloremque sapiente odio. Architecto fugit autem ex blanditiis iure numquam fuga at voluptas laudantium doloribus, assumenda sint neque odio? Necessitatibus quisquam, exercitationem sed in dicta aspernatur blanditiis quae magnam! Blanditiis tenetur odio nisi voluptatibus quae laborum quod ut consequuntur inventore  
        </p>
    )
}