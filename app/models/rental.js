import DS from 'ember-data';

const {
    Model,
    attr
}=DS;

export default Model.extend({
    title: attr(),
    owner: attr(),
    city: attr(),
    category: attr(),
    image: attr(),
    bedrooms: attr(),
    descripton: attr()
});
