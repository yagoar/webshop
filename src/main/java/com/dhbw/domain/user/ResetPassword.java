package com.dhbw.domain.user;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by jgerle on 06.03.2017.
 */

@XmlRootElement
public class ResetPassword {

    private String email;

    private String newEmail;

    private String previousPassword;

    private String newPassword;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPreviousPassword() {
        return previousPassword;
    }

    public void setPreviousPassword(String previousPassword) {
        this.previousPassword = previousPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getNewEmail() { return newEmail; }

    public void setNewEmail(String newEmail) { this.newEmail = newEmail; }
}
