interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams: {
        search?: string;
    }
}

export default function Category(props: CategoryProps){
    console.log(props);
    const {categories} = props.params
    console.log(categories);
    
    return(
        <h1>Categoria dinamica: {categories}</h1>
    )
}