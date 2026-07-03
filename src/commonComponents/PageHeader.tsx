
interface PageHeaderProps{
    title:string,
    description:string
}
const PageHeader: React.FC<PageHeaderProps> = ({title, description}) => {
    return (
        <div className="relative bg-mw-green/5 py-24 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M25%2050a25%2025%200%201050%200%2025%2025%200%2010-50%200zm25%2015a15%2015%200%20100-30%2015%2015%200%20000%2030z%22%20fill%3D%22%232E4A2C%22%20opacity%3D%220.03%22/%3E%3C/svg%3E')] bg-repeat"></div>
            <div className="container mx-auto px-4 relative">
                <h1 className="text-5xl font-serif font-bold text-mw-green">{title}</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">{description}</p>
            </div>
        </div>
    )
}

export default PageHeader