import { Schema, models, model, Document } from 'mongoose';

export interface IInteraction extends Document {
}

const InteractionSchema = new Schema({
});

const Interaction = models.Interaction || model('Interaction', InteractionSchema);

export default Interaction;