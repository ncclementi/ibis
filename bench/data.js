window.BENCHMARK_DATA = {
  "lastUpdate": 1681913308692,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "283bfdae4d5b5794319265fdc63829f235a6080d",
          "message": "ci: skip bigquery tests when auth fails",
          "timestamp": "2023-04-19T10:03:03-04:00",
          "tree_id": "9b7f305e8a8c8f9eed2881713edf10a14ee7d63d",
          "url": "https://github.com/ibis-project/ibis/commit/283bfdae4d5b5794319265fdc63829f235a6080d"
        },
        "date": 1681913228823,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146037.6352462397,
            "unit": "iter/sec",
            "range": "stddev: 2.6066486221475013e-7",
            "extra": "mean: 6.8475499367944535 usec\nrounds: 17422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.1207802654394,
            "unit": "iter/sec",
            "range": "stddev: 0.0006739626134200467",
            "extra": "mean: 9.69736650000065 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492623.7815061476,
            "unit": "iter/sec",
            "range": "stddev: 3.48753670580342e-7",
            "extra": "mean: 2.0299466601928975 usec\nrounds: 2156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.55190002874211,
            "unit": "iter/sec",
            "range": "stddev: 0.012738629974272267",
            "extra": "mean: 11.553761380950856 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.31344472891247,
            "unit": "iter/sec",
            "range": "stddev: 0.00022991356322259987",
            "extra": "mean: 8.38128512903187 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2196.9275289018115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793390305216003",
            "extra": "mean: 455.18115042232404 usec\nrounds: 1303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.82787965174712,
            "unit": "iter/sec",
            "range": "stddev: 0.020862304887592383",
            "extra": "mean: 25.754689902439818 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2228.6230793923096,
            "unit": "iter/sec",
            "range": "stddev: 0.00011265306683117737",
            "extra": "mean: 448.70754917995157 usec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.7171718110119,
            "unit": "iter/sec",
            "range": "stddev: 0.00002398851571319664",
            "extra": "mean: 1.3232463642497168 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.40860915400967,
            "unit": "iter/sec",
            "range": "stddev: 0.003852093022537508",
            "extra": "mean: 6.234079363158691 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.518735281268086,
            "unit": "iter/sec",
            "range": "stddev: 0.0006571970678122842",
            "extra": "mean: 39.18689500000596 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.96600373132101,
            "unit": "iter/sec",
            "range": "stddev: 0.013902223092319239",
            "extra": "mean: 11.76941313095287 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2097.6970000224014,
            "unit": "iter/sec",
            "range": "stddev: 0.00014591061319845002",
            "extra": "mean: 476.7132717400658 usec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.4762346776083,
            "unit": "iter/sec",
            "range": "stddev: 0.00034898866313865976",
            "extra": "mean: 3.883853596244027 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.78776859443226,
            "unit": "iter/sec",
            "range": "stddev: 0.000025691249591485438",
            "extra": "mean: 5.081616642856192 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.172454025896247,
            "unit": "iter/sec",
            "range": "stddev: 0.11677921734380946",
            "extra": "mean: 5.798646884599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2120.046844266723,
            "unit": "iter/sec",
            "range": "stddev: 0.00008584827791251313",
            "extra": "mean: 471.6876906301935 usec\nrounds: 1238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.61806230443625,
            "unit": "iter/sec",
            "range": "stddev: 0.00030049385630312957",
            "extra": "mean: 19.373063523813375 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155347.10503145,
            "unit": "iter/sec",
            "range": "stddev: 9.553325736567015e-9",
            "extra": "mean: 162.46037517223664 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1750207.166164152,
            "unit": "iter/sec",
            "range": "stddev: 1.0913340026893738e-7",
            "extra": "mean: 571.3609333411962 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9409225003292395,
            "unit": "iter/sec",
            "range": "stddev: 0.007055186059310809",
            "extra": "mean: 1.0627867860000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 77053.43762129058,
            "unit": "iter/sec",
            "range": "stddev: 3.9882283500226606e-7",
            "extra": "mean: 12.978006314460535 usec\nrounds: 14728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.89821129927313,
            "unit": "iter/sec",
            "range": "stddev: 0.00013368556126304237",
            "extra": "mean: 6.138802826771506 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.98767461268443,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116702421077115",
            "extra": "mean: 3.636526623996815 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.08224996315556,
            "unit": "iter/sec",
            "range": "stddev: 0.0003716976362941029",
            "extra": "mean: 7.571040016951185 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.389010498873,
            "unit": "iter/sec",
            "range": "stddev: 0.00015312671174109473",
            "extra": "mean: 6.120362666661094 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1895842.3143348782,
            "unit": "iter/sec",
            "range": "stddev: 9.31299417110396e-8",
            "extra": "mean: 527.4700287248478 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 228.02454464774053,
            "unit": "iter/sec",
            "range": "stddev: 0.004255236462175939",
            "extra": "mean: 4.385492805368086 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.83868940927213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245559179679136",
            "extra": "mean: 10.016157122222088 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2072.755177282936,
            "unit": "iter/sec",
            "range": "stddev: 0.00009560391140719986",
            "extra": "mean: 482.44964526435126 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.93601628854535,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461812710108688",
            "extra": "mean: 9.810075343432576 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.07772217970053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008056678170125616",
            "extra": "mean: 23.213855083341173 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2218.3988970449827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000901668554764568",
            "extra": "mean: 450.7755576925545 usec\nrounds: 1144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6539579580452541,
            "unit": "iter/sec",
            "range": "stddev: 0.0018192821073099567",
            "extra": "mean: 604.6102896000207 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.3226991574415,
            "unit": "iter/sec",
            "range": "stddev: 0.00002204793049581723",
            "extra": "mean: 1.843920605856275 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10315.507550191003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016021767292729463",
            "extra": "mean: 96.9414248532525 usec\nrounds: 4611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 282.21057356112846,
            "unit": "iter/sec",
            "range": "stddev: 0.0002308820566653093",
            "extra": "mean: 3.5434533418833585 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.778301144979,
            "unit": "iter/sec",
            "range": "stddev: 0.0008613705666659951",
            "extra": "mean: 9.922770960004641 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2106.653957523124,
            "unit": "iter/sec",
            "range": "stddev: 0.00018622464396183104",
            "extra": "mean: 474.6864080020714 usec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.755268172964914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002756293241831156",
            "extra": "mean: 63.470833312500474 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2708490.571917484,
            "unit": "iter/sec",
            "range": "stddev: 2.4389620753630303e-8",
            "extra": "mean: 369.20933392516787 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.24179451581693,
            "unit": "iter/sec",
            "range": "stddev: 0.0019444290093874501",
            "extra": "mean: 88.95376966666883 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.831096941632168,
            "unit": "iter/sec",
            "range": "stddev: 0.00010564115392204114",
            "extra": "mean: 171.49431916665966 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.50245348724759,
            "unit": "iter/sec",
            "range": "stddev: 0.00006191813264322313",
            "extra": "mean: 13.244602709088129 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6500122723393638,
            "unit": "iter/sec",
            "range": "stddev: 0.0029178656292594067",
            "extra": "mean: 377.35674299999573 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.33973788415533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133148778372823",
            "extra": "mean: 10.273296617976378 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13795.860043077284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015286877317654318",
            "extra": "mean: 72.48551354373855 usec\nrounds: 7236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 288.53815931335845,
            "unit": "iter/sec",
            "range": "stddev: 0.00026816493067210464",
            "extra": "mean: 3.4657460988166187 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8494.753281146566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012015218115869964",
            "extra": "mean: 117.71972262212971 usec\nrounds: 3890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.60067776455908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007919235212432215",
            "extra": "mean: 10.245830489131313 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1752.8594900214716,
            "unit": "iter/sec",
            "range": "stddev: 0.00002041327875281795",
            "extra": "mean: 570.4963835907637 usec\nrounds: 1426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.32743557529362,
            "unit": "iter/sec",
            "range": "stddev: 0.01896056686666902",
            "extra": "mean: 11.719559989794748 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.5180949977048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001231320672761708",
            "extra": "mean: 863.1716710492823 usec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.055344496809646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003989296395338164",
            "extra": "mean: 16.933268419999195 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2217.7825507478865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008220188208453689",
            "extra": "mean: 450.90083320512076 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.8690831850803,
            "unit": "iter/sec",
            "range": "stddev: 0.0007387710850259114",
            "extra": "mean: 10.217731355558929 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7961791214914926,
            "unit": "iter/sec",
            "range": "stddev: 0.0016891386104292794",
            "extra": "mean: 1.2559987733999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.94640901936375,
            "unit": "iter/sec",
            "range": "stddev: 0.00029832318086215953",
            "extra": "mean: 20.430507978724012 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.9722665389554,
            "unit": "iter/sec",
            "range": "stddev: 0.00024256905630947945",
            "extra": "mean: 3.571782349595187 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7169787864726126,
            "unit": "iter/sec",
            "range": "stddev: 0.0045555999151625556",
            "extra": "mean: 1.3947414049999907 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 306.9681314478573,
            "unit": "iter/sec",
            "range": "stddev: 0.00003389015895750114",
            "extra": "mean: 3.257667156793648 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 235.3562392399308,
            "unit": "iter/sec",
            "range": "stddev: 0.01161091053406076",
            "extra": "mean: 4.248878224896189 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.87296513105706,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911172661558572",
            "extra": "mean: 9.91345895999757 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.96754191902342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367729993480375",
            "extra": "mean: 11.240054276313279 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9402626839315928,
            "unit": "iter/sec",
            "range": "stddev: 0.004431454558522034",
            "extra": "mean: 1.0635325819999821 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.71253919856609,
            "unit": "iter/sec",
            "range": "stddev: 0.00019672808472639722",
            "extra": "mean: 9.032400550460427 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.54558463591357,
            "unit": "iter/sec",
            "range": "stddev: 0.00016600277168652978",
            "extra": "mean: 6.114503196318065 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 294.9326491802098,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532337943634871",
            "extra": "mean: 3.3906046101697607 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.94089877120507,
            "unit": "iter/sec",
            "range": "stddev: 0.0008434377810132439",
            "extra": "mean: 10.423083510867963 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.08933650173275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286043255342942",
            "extra": "mean: 9.795342337081673 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.64035013181692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008283222455961478",
            "extra": "mean: 9.838612310003896 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.4682709991949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011761678569227592",
            "extra": "mean: 23.54699111765011 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.4282201418808,
            "unit": "iter/sec",
            "range": "stddev: 0.000304724596104436",
            "extra": "mean: 3.540722663966226 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.5304060106703,
            "unit": "iter/sec",
            "range": "stddev: 0.000047116219197605367",
            "extra": "mean: 1.4803182671013695 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.80842926218762,
            "unit": "iter/sec",
            "range": "stddev: 0.000038075878229870375",
            "extra": "mean: 9.190464440860314 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7248762.4174559945,
            "unit": "iter/sec",
            "range": "stddev: 3.879668266754697e-9",
            "extra": "mean: 137.95458347368262 nsec\nrounds: 71424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11616344.82688928,
            "unit": "iter/sec",
            "range": "stddev: 3.6931547724629098e-9",
            "extra": "mean: 86.08559877502928 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 104.95586275743626,
            "unit": "iter/sec",
            "range": "stddev: 0.00024087841238400415",
            "extra": "mean: 9.527814585366253 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.0741771033877,
            "unit": "iter/sec",
            "range": "stddev: 0.00026894888573203256",
            "extra": "mean: 3.702686464604825 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.17080943849791,
            "unit": "iter/sec",
            "range": "stddev: 0.02145711056181569",
            "extra": "mean: 12.023449173468332 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 778133.7808777251,
            "unit": "iter/sec",
            "range": "stddev: 1.414561257419061e-7",
            "extra": "mean: 1.2851260600356054 usec\nrounds: 26178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 97.69627161217333,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700763278184954",
            "extra": "mean: 10.235805148938725 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4657.108831301154,
            "unit": "iter/sec",
            "range": "stddev: 0.000022020115810327",
            "extra": "mean: 214.72549519969218 usec\nrounds: 1979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12260.131480440621,
            "unit": "iter/sec",
            "range": "stddev: 0.000011921280652196624",
            "extra": "mean: 81.5651937824129 usec\nrounds: 4278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.93722435771522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072365580604804",
            "extra": "mean: 15.888848137253675 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1907549.459709365,
            "unit": "iter/sec",
            "range": "stddev: 5.182055423452882e-8",
            "extra": "mean: 524.2328029346932 nsec\nrounds: 48075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.20816289708786,
            "unit": "iter/sec",
            "range": "stddev: 0.021566773580223374",
            "extra": "mean: 12.16424214772745 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5577111.653751966,
            "unit": "iter/sec",
            "range": "stddev: 1.0826635180030766e-8",
            "extra": "mean: 179.3042818728343 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}