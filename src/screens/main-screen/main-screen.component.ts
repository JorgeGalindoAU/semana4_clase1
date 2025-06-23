import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ActiveFilterComponent } from "../../components/active-filter/active-filter.component";
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { Pagination } from "../../components/pagination/pagination.component";
import { IUserPagination } from '../../interfaces/user_pagination.interface';

@Component({
  selector: 'app-main-screen',
  imports: [TitleComponent, ButtonComponent, ActiveFilterComponent, Pagination],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  standalone: true,
})
export class MainScreenComponent implements OnInit, OnDestroy {
  private userService: UserService = inject(UserService);

  users = signal<IUser[]>([]);
  currentPage = signal<number>(1);
  currentCount = signal<number>(1);
  totalPages = signal<number>(1);

  showInactive = signal<boolean>(false);
  showExternals = signal<boolean>(false);

  constructor() {
    // inicializar las variables
    // inject --> inyectar los servicios (por ejemplo, API CHRONOS)
  }

  ngOnInit(): void {
    // mostrar un loading
    // llamar a nuestra API por HTTP
    this.getUsers();
  }

  ngOnDestroy(): void {
    // unsubscribe de un observable
  }

  showMore() {
    console.log("Show more!");
  }
  explore() {
    console.log("Explore!");
  }
  configure() {
    console.log("Configure!");
  }

  showInactiveUsers(value: boolean) {
    this.showInactive.set(value);
  }

  showExternalUsers(value: boolean) {
    this.showExternals.set(value);
  }

  receivedNewPage(page: number) {
    this.currentPage.set(page);

    this.getUsers();
  }

  receivedNewCount(count: number) {
    this.currentCount.set(count);

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.currentCount(), this.currentPage())
      .subscribe(
        {
          next: (value: IUserPagination) => {
            this.totalPages.set(value.total_pages);

            let users: IUser[] = value.data;
            this.users.set(users);
          },
          error: (err) => console.error(err), // NOK
        }
      );
  }
}
