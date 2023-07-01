$(document).ready(function(){
    // $(".col-md-4:first-child button").click(function(){
        // let amt =$(".col-md-4:first-child .card-text").text()
        
        // let email="olatunbosunwahab@gmail.com"


         function payment(amt){
            let handler = PaystackPop.setup({
                key: 'pk_test_bd78ecba8b07ba682170e9397bf74ef7782976a9', // Replace with your public key
                email: "test@example.com",
                amount: amt * 100,
                ref: ''+Math.floor((Math.random() * 1000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                // label: "Optional string that replaces customer email"
                onClose: function(){
                  alert('Please make the payment');
                },
                callback: function(response) {
                  let message = 'Payment complete! Reference: ' + response.reference;
                  alert(message);
                }
              });
               handler.openIframe();
        }


    


        let data= [
            {image: "./image/9.png",discount:"50%",amt:3500,title:"Fries with Salad"},
            {image: "./image/7.png",discount:"50%",amt:5000,title:"Fried rice with chicken breast"},
            {image: "./image/10.png",discount:"50%",amt:4000,title:"Spagehtti with Tomato sause"},
            {image: "./image/3.png",discount:"50%",amt:6000,title:"Greek Salad"},
            {image: "./image/5.png",discount:"50%",amt:3000,title:"Rice with Assorted Vegetable"},
            {image: "./image/11.png",discount:"50%",amt:5500,title:"Chicken with meatballs"},
        ]

        data.map((item) =>{
         let firstdiv = document.createElement("div")
         firstdiv.setAttribute("class","col-md-4 col-12")

         let seconddiv = document.createElement("div")
         seconddiv.setAttribute("class","card")

         firstdiv.appendChild(seconddiv)

        let img =document.createElement("img")
        img.setAttribute("class", "card-img-top")
        img.setAttribute("src", item.image)

        seconddiv.appendChild(img)

        let span =document.createElement("span")
        span.setAttribute("class","badge rounded-pill text-bg-primary")
        span.innerText = item.discount

        let thirddiv = document.createElement("div")
        thirddiv.setAttribute("class","card-body")
        seconddiv.append(thirddiv)

        let h4 = document.createElement("h4")
        h4.setAttribute("class","card-title")
        h4.innerText = item.amt
        thirddiv.appendChild(h4)

        let p = document.createElement("p")
        p.setAttribute("class","card-text")
        p.innerText = item.title
        thirddiv.appendChild(p)

        let fourthdiv = document.createElement("div")
        fourthdiv.setAttribute("class","card-footer")
        seconddiv.appendChild(fourthdiv)

        let button = document.createElement("button")
        button.setAttribute("class" , "btn btn-primary")
        fourthdiv.appendChild(button)

        button.onclick= function(){
            // handler.openIframe();
            payment(item.amt)
            
        
        }

        let i = document.createElement("i")
        i.setAttribute("class" , "fa-solid fa-shopping-cart")
        button.appendChild(i)

        document.querySelector(".row").appendChild(firstdiv)

        })
     })


