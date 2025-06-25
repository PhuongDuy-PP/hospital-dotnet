using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital_API.Models
{
    public class Medicines
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Unit { get; set; }
        public decimal Price { get; set; }
        public int SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public MedicineSupplier Supplier { get; set; }
    }
}