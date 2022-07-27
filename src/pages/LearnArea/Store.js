import { Item } from "./Item";
import { AnimatePresence } from "framer-motion";
import { List } from "./List";
import {articleConstant} from "../../Constants/articleConstant"
import { useParams } from "react-router-dom";

function Store() {
    let params = useParams();
    const imageHasLoaded = true;
    let selectedArticle = articleConstant.filter((article) => {
      return article.id == params.id;
    })
    return (
      <>
        <List selectedId={params.id} />
        <AnimatePresence>
          {params.id && imageHasLoaded && (
            <Item title ={selectedArticle[0].title} imgSrc={selectedArticle[0].imgLink} explanation={selectedArticle[0].explanation} id={params.id} key="item" />
          )}
        </AnimatePresence>
      </>
    );
  }

  export default Store;