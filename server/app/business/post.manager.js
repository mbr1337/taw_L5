import postDAO from '../DAO/postDAO';

function create(context) {
    async function query() {
        let result = postDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await postDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await postDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }
    async function deleteById(id) {
        return postDAO.deleteById(id);
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteById: deleteById,
    };
}

export default {
    create: create
};
