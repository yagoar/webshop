getShoppingCart() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.http.get('/api/v1/shopping-cart', options)
			.map((response: Response) => response.json())
            .subscribe(
                data => {
                    this.shoppingCart = data;
                    this.shoppingCart.items = _.sortBy(this.shoppingCart.items, ['iq_id']);
                    this.shoppingCartUpdate.next(this.shoppingCart);
                },
                error => {
                    console.log(error);
                }
            );
}