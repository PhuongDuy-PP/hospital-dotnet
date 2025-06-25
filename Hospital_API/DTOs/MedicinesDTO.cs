using System.ComponentModel.DataAnnotations;
namespace Hospital_API.DTOs
{
    public class MedicinesDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Unit { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public int Id { get; set; }
        [Required]
        public decimal Price { get; set; }
        public int SupplierId { get; set; }
    }
}