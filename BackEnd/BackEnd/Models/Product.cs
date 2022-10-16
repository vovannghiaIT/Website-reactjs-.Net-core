using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Avatar { get; set; }
        public int? CategoryId { get; set; }
        public int? TypeId { get; set; }
        public int? BrandId { get; set; }
        public string? ShortDes { get; set; }
        public string? FullDescription { get; set; }
        public double? Price { get; set; }
        public double? PriceDiscount { get; set; }
        public string? Slug { get; set; }
        public bool? Deleted { get; set; }
        public bool? ShowOnHomePage { get; set; }
        public int? DisplayOrder { get; set; }
        public DateTime? CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
    }
}
