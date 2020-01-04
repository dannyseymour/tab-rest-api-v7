package io.discordia.tabrestapiv7.web.rest.vm;

import io.discordia.tabrestapiv7.service.dto.UserDTO;

/**
 * View Model extending the UserDTO, which is meant to be used in the user management UI.
 */
public class ManagedUserVM extends UserDTO {

    public ManagedUserVM() {
        // Empty constructor needed for Jackson.
    }

    @Override
    public String toString() {
        return "ManagedUserVM{" + super.toString() + "} ";
    }
}
