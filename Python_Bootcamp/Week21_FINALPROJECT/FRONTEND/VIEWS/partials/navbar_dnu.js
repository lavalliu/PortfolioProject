export function loadNavbar() {
    const navbarHtml = `
    <nav>
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home">ROYAL RESTAURANT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#starters">Starter</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#maincourse">Main Course</a>
                    </li>			
                    <li class="nav-item">
                    <a class="nav-link" href="#desserts">Desserts</a>
                    </li>	
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Beverage
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#soft">Soft</a></li>
                        <li><a class="dropdown-item" href="#cocktails">Cocktails</a></li>
                        <li><a class="dropdown-item" href="#aperitifs">Aperitifs</a></li>
                        <li><a class="dropdown-item" href="#hot">Hot Beverage</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        The Cellar
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#red">The Reds</a></li>
                        <li><a class="dropdown-item" href="#white">The Whites</a></li>
                        <li><a class="dropdown-item" href="#rose">The Rosés</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="login.html">Reserve a Table</a>
                    <!-- <a class="btn btn-outline-primary" href="register.html">Register an account</a> -->
                    </li>	
                    </ul>		
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>			
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>	
                    </ul>
                </div>
            </div>
        </nav>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
    }