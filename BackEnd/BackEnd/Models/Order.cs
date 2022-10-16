using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int UserId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedOnUtc { get; set; }
    }
}
