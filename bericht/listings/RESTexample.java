/**
 * Declaration of Register-method in the UserEndpoint
 */
@PUT
@Path( "register" )
Response register(User user);

/**
 * Implementation of defined Endpoint-method
 * in UserEndpointImpl
 */
@Override
public Response register(User user) {
    if (userDao.findByEmail(user.getEmail()) == null) {
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        ShoppingCart cart = new ShoppingCart();
        cart.setUser(user);
        userDao.save(user);
        shoppingCartDao.save(cart);
        return Response.ok()
        .entity("User erfolgreich angelegt. Sie können sich jetzt mit Ihrer Email-Adresse und Ihrem Passwort anmelden").build();
    } else return Response.status(Response.Status.BAD_REQUEST)
        .entity("Benutzer existiert bereits").build();
}
