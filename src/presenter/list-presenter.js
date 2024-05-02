import ListView from '../view/list-view.js';
//import SortView from '../view/sort-view.js';
import ListElementView from '../view/list-element-view.js';
import { render } from '../render.js';
import AddFormView from '../view/add-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import ContainerListView from '../view/container-list-view.js';


export default class ListPresenter {
  container = new ContainerListView;
  listComponent = new ListView();
  //listElementComponent = new ListElementView();

  constructor({listContainer, waypointsModel}) {
    this.listContainer = listContainer;
    this.waypointsModel = waypointsModel;
  }

  init() {
    this.listWaypoints = [...this.waypointsModel.getWaypoint()];

    render(this.listComponent, this.listContainer);
    //render(new AddFormView(), this.listComponent.getElement(), 'afterbegin');
    // render(this.listComponent, this.listComponent.getElement());
    // render(new EditFormView(), this.listComponent.getElement());

    //render(new ListElementView(), this.listElementComponent.getElement());

    for (let i = 0; i < this.listWaypoints.length; i++) {
      render(new ListElementView({listElement: this.listWaypoints[i]}), this.listComponent.getElement());
    }

    // for (let i = 0; i < 3; i++) {
    //   render(new ListElementView(), this.listElementComponent.getElement());
    //   render(new AddFormView(), this.listElementComponent.getElement());
    // }
  }
}
