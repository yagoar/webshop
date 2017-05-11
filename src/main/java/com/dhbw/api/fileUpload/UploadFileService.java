package com.dhbw.api.fileUpload;


import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
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

    @POST
    @Path("upload/{artNo}")
    @Consumes({MediaType.MULTIPART_FORM_DATA, MediaType.APPLICATION_JSON})
    public Response uploadFile(
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail,
            @PathParam("artNo") int artNo) {

        String sRootPath = new File("src/images").getAbsolutePath();
        String uploadedFileLocation = sRootPath + File.separator + artNo + ".jpg";

        //if(fileDetail.getName().endsWith(".jpg"))

        // save it
        writeToFile(uploadedInputStream, uploadedFileLocation);

        String output = uploadedFileLocation;

        return Response.status(200).entity(output).build();

    }

    // save uploaded file to new location
    private void writeToFile(InputStream uploadedInputStream,
                             String uploadedFileLocation) {

        try {
            OutputStream out = new FileOutputStream(new File(
                    uploadedFileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];

            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {

            e.printStackTrace();
        }
    }
}

