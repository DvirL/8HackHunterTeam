using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using _8Hack.WebApi.DAL.Interfaces;
using _8Hack.WebApi.Models.Common;

namespace _8Hack.WebApi.DAL.Implementations
{
    public class BasicDestinationsStorage : IDestinationsStorage
    {
        private IList<Destination> _destinations;

        public BasicDestinationsStorage()
        {
            _destinations = new List<Destination>();

            _destinations.Add(new Destination() {Id = Guid.NewGuid().ToString(), Name = "רכבת תל אביב האוניברסיטה"});
            _destinations.Add(new Destination() { Id = Guid.NewGuid().ToString(), Name = "רמת השרון" });
            _destinations.Add(new Destination() { Id = Guid.NewGuid().ToString(), Name = "הרצליה" });
        }

        public IEnumerable<Destination> Destinations {
            get { return _destinations; }
        }

        public Destination GetDestination(string destintionId)
        {
            var requestedDestination = _destinations.FirstOrDefault(des => des.Id == destintionId);
            return requestedDestination;
        }
    }
}