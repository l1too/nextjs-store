export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <main>
            <nav>Navegacion de la categorias</nav>
            {children}
        </main>
    )
}