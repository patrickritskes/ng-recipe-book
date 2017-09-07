import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isMobileNavbarToggled = false;

    constructor(private dataStorageService: DataStorageService, private route: ActivatedRoute, private router: Router, public authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logoutUser();
        this.router.navigate(['/signin'], { relativeTo: this.route });
    }

    toggleMobileNavbar() {
        this.isMobileNavbarToggled = !this.isMobileNavbarToggled;
    }
}