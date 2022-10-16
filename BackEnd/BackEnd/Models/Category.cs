using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class Category
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Avatar { get; set; }
        public int? IsPopular { get; set; }
        public string? Slug { get; set; }
        public bool? ShowOnHomePage { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Deleted { get; set; }
        public DateTime? CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
    }
}
