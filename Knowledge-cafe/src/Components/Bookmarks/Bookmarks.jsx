

const Bookmarks = ({ readTime, bookMark }) => {

    return (
        <div >
            <div
                className="border rounded-lg text-[#6047EC] font-exo2 font-bold text-2xl"
                style={{
                    width: "411px",
                    height: "80px",
                    flexShrink: 0,
                    borderRadius: "8px",
                    border: "1px solid #6047EC",
                    background: "rgba(96, 71, 236, 0.10)",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "160%", // 38.4px
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Spent time on read: {readTime} min
            </div>

            <div className="p-8 mt-6" style={{
                borderRadius: '8px',
                background: 'rgba(17, 17, 17, 0.05)'
            }}>
                <h1 className="text-2xl font-semibold">Bookmarked Blogs: {bookMark.length}</h1>
                {
                    bookMark.map((blog) => (
                        <div key={blog.id} className="flex items-center gap-4 mt-4 bg-white p-5 rounded-sm">
                    
                            
                                <h2 className="   text-xl font-semibold text-gray-900">{blog.title}</h2>
                               
                           
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Bookmarks;