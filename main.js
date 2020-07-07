new Vue ({
    el:'#app',
    data:{
        products: [
            {
                id: 1586934917210,
                unit: '罐',
                category: '梅酒', 
                title: '白鶴 梅酒原酒',
                origin_price: 650,
                price: 599,
                description: '喝爆就對了',
                content: '720 ml 19.5% ',
                is_enabled: 1,
                imageUrl: 'https://cdn.shopify.com/s/files/1/0028/9669/1264/products/L01501_2000x.png?v=1580479073',
            },
            {
                id:1686934917210,
                unit: '罐',
                category: '梅酒',
                title: '梅乃宿 黑標18度梅酒',
                origin_price: 1000,
                price: 980,
                description: '喝爆就對了',
                content: '720 ml 18.0% ',
                is_enabled: 1,
                imageUrl: 'https://cdn.shopify.com/s/files/1/0028/9669/1264/products/L02911_e1dd2d6a-445a-448d-8649-71127fe888b3_2000x.png?v=1580480478',
            },
        ],
        temProduct:{}         
    },
    methods:{
        openModel(newProduct,item){
            switch(newProduct){
                case'new':
                $('#productModal').modal('show');
                console.log('new');
                break;    //阻止已執行的區塊繼續執行
                case'edit':
                this.temProduct = Object.assign({},item);
                $('#productModal').modal('show');
                console.log('edit');
                console.log(this.products[0].title);
                break;
                case'delete':
                $('#productModal').modal('show');  
                console.log('delete'); 
                break;                            
                default:
                break;
            }          
        },
        updateProduct(checkProduct,item){
            console.log('update')
        }


    },
});
