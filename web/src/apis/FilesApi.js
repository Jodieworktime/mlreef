export default class FilesApi {

    static getFilesPerProject(token, projectId, path, recursive = false, domain = "gitlab.com") {
        return fetch(new Request(
            `https://${domain}/api/v4/projects/${projectId}/repository/` +
                `tree?ref=master&recursive=${recursive}&path=${path}`, {
                    method: 'GET',
                    headers: new Headers({
                        "PRIVATE-TOKEN": token
                    })
                }
            )).then(response => {
                return response.json();
              }).catch(err => {
                return err;
              }); 
    }
}