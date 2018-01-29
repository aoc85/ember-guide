import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
    actions: {
        filterByCity(param) {
            if(param !== '') {
                return get(this, 'store').query('rental', { city: param })
                    .then((results) => {
                        return {query: param, results: results};
                    });
            }
                return get(this, 'store').findAll('rental')
                    .then((results) => {
                        return {query: param, results: results};
                    });
        }   
    }
        
});
