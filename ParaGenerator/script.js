const text = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis voluptatem facere quae autem quisquam adipisci pariatur porro odio tempore reiciendis. Cumque, corrupti.",

"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum veniam autem.",

"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae quas atque dolore possimus corporis, voluptate mollitia architecto? Aperiam expedita iste error sapiente explicabo tenetur, facere maiores, facilis amet voluptatem aliquam blanditiis, quas similique?" ,

"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla distinctio ab rem maxime sint perspiciatis dicta veritatis voluptate architecto neque, doloremque eius a repellendus, minima natus ipsa at fugiat nam. Mollitia molestiae eius et velit voluptates nulla debitis earum quas similique aut, perferendis, iste illo." ,

"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam aliquid quasi cupiditate cum vero laudantium error dolor praesentium nobis." ,

"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est corporis impedit ut vel sit fugiat expedita exercitationem delectus voluptate quaerat alias, praesentium ad similique a totam assumenda commodi, ipsam earum facilis dignissimos molestiae tempora veritatis excepturi? Voluptate laborum libero vel itaque cupiditate ducimus atque nihil! Corrupti aspernatur, aut qui optio doloribus magni quae voluptatibus a autem ipsa est distinctio, dolor perspiciatis fugiat architecto dolorem? Dolorem, porro commodi. Impedit sed porro, fuga accusantium laboriosam omnis, ipsa maxime voluptatum ab eos deleniti dicta facere eum? Eos tenetur unde est nam provident quasi harum, cum quibusdam odio, quis facilis praesentium deserunt. Neque tempore odit natus quisquam quod sit iusto, quibusdam repudiandae consequuntur. Quaerat voluptas sit ipsum laboriosam cumque. Maxime nostrum facilis dolores temporibus adipisci assumenda repellendus, dignissimos earum, nemo molestias quidem repellat, perspiciatis quos! Unde suscipit voluptatibus blanditiis minus nostrum? Eaque odio minima laboriosam delectus sit fugit eveniet perspiciatis dolores, quasi pariatur cupiditate labore voluptates atque veniam incidunt rem temporibus, amet ipsum repudiandae ad molestias. Voluptatem officiis pariatur quia odio doloremque, nihil dolorem labore quidem quibusdam eveniet, similique sapiente, iste accusamus dignissimos obcaecati dicta accusantium illo tenetur! Optio sunt quidem suscipit voluptates labore rerum aliquam officiis nemo distinctio obcaecati sed soluta quos, ipsa saepe repellendus cum, nobis illum. Possimus optio sed minima blanditiis repellat fugiat sequi non voluptatem? A, eaque incidunt nam animi, at deserunt cum totam maiores officiis, illum fugiat nobis!" ,

"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex blanditiis quia molestiae quam, nemo autem totam tempore inventore facere illo itaque. Eaque provident vero ullam quae reiciendis porro, ipsa iusto cum. Alias, assumenda totam." ,

"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex culpa atque officia deleniti vel unde, hic facilis voluptatem dicta id nam mollitia sapiente maxime excepturi corporis fuga officiis voluptatum minus nisi delectus autem quis! Quas, ab provident. Ratione, necessitatibus? Adipisci sapiente eum inventore nesciunt vel?" ,

"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nam fuga sunt quam tempore, iste ipsa facere eveniet iusto quisquam quidem est molestiae delectus neque sequi aliquid animi. Maxime natus atque tempore voluptatum doloremque!" ]

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
const data = document.querySelector("#data")
const items = document.querySelector("#items")
const generate = () => {
    console.log("button clicked");
    let value = items.value
    console.log(value);
    if(isNaN(value) || value < 0 || items.value >9 ){
        const randomIndex = Math.floor(Math.random()*text.length)
        data.innerHTML= `<p> ${text[randomIndex]} </p>}` 
    }
    else{
        const localText = shuffle(text)
        const displayData = localText.slice(0,value)
        const paras = displayData.map( d => {
            return  `<p> ${d} </p>}`
        })
        data.innerHTML  = paras.join(" ")
    }
}