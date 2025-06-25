using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Hospital_API.Models
{
    public class MedicineSupplier
    {
        [Key]
        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        // Navigation property: 1 supplier có nhiều thuốc
        public ICollection<Medicines> Medicines { get; set; }
    }
}