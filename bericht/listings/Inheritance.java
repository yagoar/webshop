/**
 * Base Class
 */
@Entity
@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
@XmlRootElement
public class BaseItem {
    /*...*/
}

/**
 * Child Class "Single"
 */
@Entity
@DiscriminatorValue("single")
public class SingleItem extends BaseItem {
    /*...*/
}

/**
 * Child Class "Multiple"
 */
@Entity
@DiscriminatorValue("multiple")
public class MultipleItem extends BaseItem {
    /*...*/
}