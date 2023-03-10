window.BENCHMARK_DATA = {
  "lastUpdate": 1678490239724,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e62f15807a10859875a1d1c5975c22b8634c781e",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.2.4.12",
          "timestamp": "2023-03-10T18:10:29-05:00",
          "tree_id": "645cce421f1f67b95eb9875a15f9e10686b3f7bb",
          "url": "https://github.com/ibis-project/ibis/commit/e62f15807a10859875a1d1c5975c22b8634c781e"
        },
        "date": 1678490150847,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.77018652824495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005536307615866887",
            "extra": "mean: 17.930727190477434 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.7096830748117,
            "unit": "iter/sec",
            "range": "stddev: 0.0004988324301986843",
            "extra": "mean: 8.28433953703809 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 583.8553954586174,
            "unit": "iter/sec",
            "range": "stddev: 0.010682069855134193",
            "extra": "mean: 1.7127528627435251 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.25102502697122,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480107160551666",
            "extra": "mean: 9.07021045614193 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.5689533243188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001223413164163513",
            "extra": "mean: 10.463649179105708 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7429616.541151655,
            "unit": "iter/sec",
            "range": "stddev: 8.226428793070734e-9",
            "extra": "mean: 134.59644847902334 nsec\nrounds: 59169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.61050610167126,
            "unit": "iter/sec",
            "range": "stddev: 0.00007479889247281589",
            "extra": "mean: 3.3828297011069814 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12534486.447444635,
            "unit": "iter/sec",
            "range": "stddev: 3.6450162102745753e-9",
            "extra": "mean: 79.7798939903084 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.18841493465906,
            "unit": "iter/sec",
            "range": "stddev: 0.0007667116818308821",
            "extra": "mean: 23.154357517239927 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8063.245937569794,
            "unit": "iter/sec",
            "range": "stddev: 0.000013040078045685",
            "extra": "mean: 124.01953354053256 usec\nrounds: 3861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.0411532352496,
            "unit": "iter/sec",
            "range": "stddev: 0.00020925292802935074",
            "extra": "mean: 3.204705500002092 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.94197386460428,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650192843186586",
            "extra": "mean: 10.759401360000993 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.94512012984976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006298396079149957",
            "extra": "mean: 6.137035581078509 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138291.0170679459,
            "unit": "iter/sec",
            "range": "stddev: 5.234138931560376e-7",
            "extra": "mean: 7.231127669765235 usec\nrounds: 32678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.2903512033757,
            "unit": "iter/sec",
            "range": "stddev: 0.00026142327845746053",
            "extra": "mean: 3.4929573972600196 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.586005981721396,
            "unit": "iter/sec",
            "range": "stddev: 0.0018246065795333784",
            "extra": "mean: 386.69670800001086 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5371.87352054344,
            "unit": "iter/sec",
            "range": "stddev: 0.000019611745311076482",
            "extra": "mean: 186.15479239705482 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5784.960122984444,
            "unit": "iter/sec",
            "range": "stddev: 0.00004440723844093651",
            "extra": "mean: 172.86203858637887 usec\nrounds: 2462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 108.13265845417838,
            "unit": "iter/sec",
            "range": "stddev: 0.00946763000214395",
            "extra": "mean: 9.247899887930286 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 717038.8996438066,
            "unit": "iter/sec",
            "range": "stddev: 8.971972224217205e-7",
            "extra": "mean: 1.394624476436015 usec\nrounds: 23418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9311627862982548,
            "unit": "iter/sec",
            "range": "stddev: 0.005576938769566209",
            "extra": "mean: 1.0739260790000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.78322997517844,
            "unit": "iter/sec",
            "range": "stddev: 0.00029225131595222883",
            "extra": "mean: 9.82480119999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.882602265513,
            "unit": "iter/sec",
            "range": "stddev: 0.00003295466053156413",
            "extra": "mean: 1.838632079486557 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.7784211631785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492451390712131",
            "extra": "mean: 20.9299507111104 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.17376236727934,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696828391733577",
            "extra": "mean: 9.982653904258656 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5549.323599249827,
            "unit": "iter/sec",
            "range": "stddev: 0.000056125302198105104",
            "extra": "mean: 180.2021421376801 usec\nrounds: 3180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1644341.4020769398,
            "unit": "iter/sec",
            "range": "stddev: 1.0290197539974809e-7",
            "extra": "mean: 608.1462150967658 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70773.99889080644,
            "unit": "iter/sec",
            "range": "stddev: 6.033991485004093e-7",
            "extra": "mean: 14.129482799789912 usec\nrounds: 12500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.27870874436219,
            "unit": "iter/sec",
            "range": "stddev: 0.0007569952472912467",
            "extra": "mean: 9.972206588232732 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.607491138759,
            "unit": "iter/sec",
            "range": "stddev: 0.00023451834429343837",
            "extra": "mean: 3.2194973673486382 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11702.510904530925,
            "unit": "iter/sec",
            "range": "stddev: 0.000015452361454734643",
            "extra": "mean: 85.45174690782167 usec\nrounds: 5741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.197102409238774,
            "unit": "iter/sec",
            "range": "stddev: 0.00047357016480000327",
            "extra": "mean: 15.823510285715413 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.5306117231261,
            "unit": "iter/sec",
            "range": "stddev: 0.00019773038303787512",
            "extra": "mean: 3.3054506263160994 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.11436453127597,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475673750806098",
            "extra": "mean: 14.262412655168959 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5531.508278755947,
            "unit": "iter/sec",
            "range": "stddev: 0.000043197328377445434",
            "extra": "mean: 180.78251890909274 usec\nrounds: 2274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.87787055502265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512661311738055",
            "extra": "mean: 8.41199455652387 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.397935052525385,
            "unit": "iter/sec",
            "range": "stddev: 0.00030912789734386195",
            "extra": "mean: 96.17294154545871 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13690.120201709131,
            "unit": "iter/sec",
            "range": "stddev: 0.000001731745988465413",
            "extra": "mean: 73.04537763482573 usec\nrounds: 6689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.67959416201472,
            "unit": "iter/sec",
            "range": "stddev: 0.00010971433732358543",
            "extra": "mean: 8.497649971695651 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.6267088036141,
            "unit": "iter/sec",
            "range": "stddev: 0.000654437420266294",
            "extra": "mean: 9.74405212500378 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.59490894592653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935604905511264",
            "extra": "mean: 7.4853151807211225 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496567.8183971537,
            "unit": "iter/sec",
            "range": "stddev: 3.4061334817683147e-7",
            "extra": "mean: 2.0138236167374877 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.0924776007572,
            "unit": "iter/sec",
            "range": "stddev: 0.00008094431078005434",
            "extra": "mean: 6.988487562498591 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.77699278778897,
            "unit": "iter/sec",
            "range": "stddev: 0.0006922792288734206",
            "extra": "mean: 9.544079987343778 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.6703122406295,
            "unit": "iter/sec",
            "range": "stddev: 0.00005525442223984608",
            "extra": "mean: 1.4648359274886957 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1884404.288255337,
            "unit": "iter/sec",
            "range": "stddev: 1.1039171818827201e-7",
            "extra": "mean: 530.671685599826 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.546953109550728,
            "unit": "iter/sec",
            "range": "stddev: 0.0022928387290289155",
            "extra": "mean: 180.27915149998344 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.97598584856259,
            "unit": "iter/sec",
            "range": "stddev: 0.00022267099835914794",
            "extra": "mean: 10.641016329548785 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.01956168307592,
            "unit": "iter/sec",
            "range": "stddev: 0.016121489603582687",
            "extra": "mean: 10.202045212498234 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.06242080788633,
            "unit": "iter/sec",
            "range": "stddev: 0.0035961413757364382",
            "extra": "mean: 5.985786600985218 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.1895940798233,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110803955427134",
            "extra": "mean: 6.3215283269226585 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.23653814437897,
            "unit": "iter/sec",
            "range": "stddev: 0.0012790886339897284",
            "extra": "mean: 9.877856536084288 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.8322577403918,
            "unit": "iter/sec",
            "range": "stddev: 0.004127580161859929",
            "extra": "mean: 4.276569920948343 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 293.99686280988675,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445006067897425",
            "extra": "mean: 3.4013968395528447 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.782663695681784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118645672789195",
            "extra": "mean: 38.785751999995455 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.03015777886323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006991161199080949",
            "extra": "mean: 8.401232247862943 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.19445473917077,
            "unit": "iter/sec",
            "range": "stddev: 0.00011377568166306429",
            "extra": "mean: 5.203063747895906 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.77020933725675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970878276532987",
            "extra": "mean: 27.19592893333811 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.5094799781846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007025778964819872",
            "extra": "mean: 9.56850995918017 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.0677492948133,
            "unit": "iter/sec",
            "range": "stddev: 0.00024980894510850547",
            "extra": "mean: 3.256610315790304 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 320.9395165929005,
            "unit": "iter/sec",
            "range": "stddev: 0.00010453472002789573",
            "extra": "mean: 3.1158518920200837 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5772901.234311264,
            "unit": "iter/sec",
            "range": "stddev: 2.135266789012458e-8",
            "extra": "mean: 173.22312636418388 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.74195534032344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099729491201772",
            "extra": "mean: 3.3140900106918756 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.4473637835488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199999261494163",
            "extra": "mean: 1.3378868512399853 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1797534793305006,
            "unit": "iter/sec",
            "range": "stddev: 0.012071003195968242",
            "extra": "mean: 5.563174652999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9253325805701115,
            "unit": "iter/sec",
            "range": "stddev: 0.0019906311557921106",
            "extra": "mean: 1.0806925217999832 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5564.8202636492715,
            "unit": "iter/sec",
            "range": "stddev: 0.000043332093659011425",
            "extra": "mean: 179.70032321299536 usec\nrounds: 2042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1878480.6532213662,
            "unit": "iter/sec",
            "range": "stddev: 1.170790003985208e-7",
            "extra": "mean: 532.3451153383568 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8520765720322371,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556471721391307",
            "extra": "mean: 1.1736034446000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6782301329611681,
            "unit": "iter/sec",
            "range": "stddev: 0.0020899637932018764",
            "extra": "mean: 1.4744257905999802 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.697224339484112,
            "unit": "iter/sec",
            "range": "stddev: 0.0004761866144538722",
            "extra": "mean: 63.705530249997366 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.32763758080337,
            "unit": "iter/sec",
            "range": "stddev: 0.00069987435954654",
            "extra": "mean: 8.823972874992592 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.10689492403677,
            "unit": "iter/sec",
            "range": "stddev: 0.023045726212600127",
            "extra": "mean: 32.147213742869745 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11909.920850167922,
            "unit": "iter/sec",
            "range": "stddev: 0.000002487897496756316",
            "extra": "mean: 83.96361424903178 usec\nrounds: 5081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.0938743236634,
            "unit": "iter/sec",
            "range": "stddev: 0.000006394266089723671",
            "extra": "mean: 569.4456399064297 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.9783113346826,
            "unit": "iter/sec",
            "range": "stddev: 0.00020834295989654228",
            "extra": "mean: 3.154789978498392 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.48790447763831,
            "unit": "iter/sec",
            "range": "stddev: 0.00013968152914259495",
            "extra": "mean: 13.424998421055136 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.80903270716881,
            "unit": "iter/sec",
            "range": "stddev: 0.0006430195887671877",
            "extra": "mean: 9.91974601030853 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5289.848952626386,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296738628764451",
            "extra": "mean: 189.04131459245252 usec\nrounds: 3255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.02851129625695,
            "unit": "iter/sec",
            "range": "stddev: 0.01688387834512499",
            "extra": "mean: 10.523157590909126 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.52533164184761,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278666809131785",
            "extra": "mean: 8.36642731932722 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2544657.165337248,
            "unit": "iter/sec",
            "range": "stddev: 1.8355263999338357e-8",
            "extra": "mean: 392.9802464641799 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5660.280334616251,
            "unit": "iter/sec",
            "range": "stddev: 0.00008871630413750469",
            "extra": "mean: 176.66969494149564 usec\nrounds: 2570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5730.170581336561,
            "unit": "iter/sec",
            "range": "stddev: 0.00004791476542818173",
            "extra": "mean: 174.51487452346495 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.7004342832852,
            "unit": "iter/sec",
            "range": "stddev: 0.00001813564358159899",
            "extra": "mean: 852.0061599965629 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.48584473216016,
            "unit": "iter/sec",
            "range": "stddev: 0.00004412699930505674",
            "extra": "mean: 2.828967594891134 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6308375.948003651,
            "unit": "iter/sec",
            "range": "stddev: 9.930428228692928e-9",
            "extra": "mean: 158.51940471557793 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7756449803551841,
            "unit": "iter/sec",
            "range": "stddev: 0.0011473486186316562",
            "extra": "mean: 563.1756410000207 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}