package com.dhbw.api.fileUpload;


import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.repositories.BaseItemDao;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.*;

/**
 * Created by jgerle on 19.03.2017.
 */
@Component
@Path("file")
public class UploadFileService {

    @Autowired
    BaseItemDao baseItemDao;

    @POST
    @Path("upload/{itemName}")
    @Consumes({MediaType.MULTIPART_FORM_DATA, MediaType.APPLICATION_JSON})
    public Response uploadFile(
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail,
            @PathParam("itemName") String itemName) {

        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            int read = 0;
            byte[] bytes = new byte[1024];

            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            BaseItem item = baseItemDao.findByName(itemName);
            item.setImage(out.toByteArray());
            baseItemDao.save(item);
            out.flush();
            out.close();
        } catch (IOException e) {

            e.printStackTrace();
        }

        return Response.status(200).entity("File Upload successful").build();

    }
}

