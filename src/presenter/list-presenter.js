import ListView from '../view/list-view.js';
import ListElementView from '../view/list-element-view.js';
import { render } from '../render.js';
// import AddFormView from '../view/add-form-view.js';
// import EditFormView from '../view/edit-form-view.js';
import ContainerListView from '../view/container-list-view.js';
import ListOfferElementView from '../view/list-offer-element-view.js';
import ListOfferView from '../view/list-offers-view.js';


export default class ListPresenter {
  container = new ContainerListView;
  listComponent = new ListView();

  //listOfferComponent = new ListOfferView();
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
      const listElementComponent = new ListElementView({listElement: this.listWaypoints[i]});

      render(listElementComponent, this.listComponent.getElement());

      for (let j = 0; j < this.listWaypoints[i].offers.length; j++) {
        render(new ListOfferElementView({offerElement: this.listWaypoints[i].offers[j]}), listElementComponent.getElement().querySelector('.event__selected-offers'));
      }

    }

    // for (let i = 0; i < 3; i++) {
    //   render(new ListElementView(), this.listElementComponent.getElement());
    //   render(new AddFormView(), this.listElementComponent.getElement());
    // }
  }
}
