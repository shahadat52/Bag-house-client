
const SubCategory = () => {
    const SubCategories = [
        'প্লাস্টিকের বেতের ব্যাগ',
        'টোট ব্যাগ',
        'পাটের ব্যাগ'
    ]
    return (
        <div className="flex items-center justify-start mt-5 gap-5">
            {
                SubCategories.map((bag, index) => <div className="border-2 rounded-md hover:bg-primary hover:rounded-xl border-primary p-3" key={index} >{bag}</div>)
            }
        </div>
    );
};

export default SubCategory;