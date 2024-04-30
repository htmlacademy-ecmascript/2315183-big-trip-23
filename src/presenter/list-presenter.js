import ListView from '../view/list-view.js';
//import SortView from '../view/sort-view.js';
import ListElementView from '../view/list-element-view.js';
import { render } from '../render.js';
import AddFormView from '../view/add-form-view.js';
import EditFormView from '../view/edit-form-view.js';


export default class ListPresenter {
  listComponent = new ListView();
  listElementComponent = new ListElementView();

  constructor({listContainer, waypointsModel}) {
    this.listContainer = listContainer;
    this.waypointsModel = waypointsModel;
  }

  init() {
    this.listWaypoints = [...this.waypointsModel.getWaypoint()];

    render(this.listComponent, this.listContainer);
    render(new AddFormView(), this.listContainer, 'afterbegin');
    render(this.listElementComponent, this.listComponent.getElement());
    render(new EditFormView(), this.listElementComponent.getElement());

    //render(new ListElementView(), this.listElementComponent.getElement());

    for (let i = 0; i < this.listWaypoints.length; i++) {
      render(new ListView({task: this.listWaypoints[i]}), this.listElementComponent.getElement());
    }

    // for (let i = 0; i < 3; i++) {
    //   render(new ListElementView(), this.listElementComponent.getElement());
    //   render(new AddFormView(), this.listElementComponent.getElement());
    // }
  }
}
