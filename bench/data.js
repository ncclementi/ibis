window.BENCHMARK_DATA = {
  "lastUpdate": 1677665087038,
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
          "id": "64fecc1d796fbb670cca76f42178cd2cc3bbdadb",
          "message": "ci: remove use of `autorebase:opt-in` label\n\nWe removed the autorebase action a while ago. This removes the use of it\nin CI.",
          "timestamp": "2023-03-01T04:54:51-05:00",
          "tree_id": "b4192c01ffc0a7ab753b2aa53bbf90d056e048df",
          "url": "https://github.com/ibis-project/ibis/commit/64fecc1d796fbb670cca76f42178cd2cc3bbdadb"
        },
        "date": 1677665009890,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.06581931740597,
            "unit": "iter/sec",
            "range": "stddev: 0.008609758179701449",
            "extra": "mean: 8.192301543478887 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.95343427098231,
            "unit": "iter/sec",
            "range": "stddev: 0.00066793656945868",
            "extra": "mean: 9.178232945946993 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8126163003751942,
            "unit": "iter/sec",
            "range": "stddev: 0.006849402739323913",
            "extra": "mean: 1.2305930850000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.15766557811696,
            "unit": "iter/sec",
            "range": "stddev: 0.00019712248968624228",
            "extra": "mean: 3.183115071089503 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7150834348729567,
            "unit": "iter/sec",
            "range": "stddev: 0.0020629908516384284",
            "extra": "mean: 583.0620130000113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.96573939459996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002873001909414433",
            "extra": "mean: 10.20765020689592 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9660.597998906604,
            "unit": "iter/sec",
            "range": "stddev: 0.0013671855290847126",
            "extra": "mean: 103.51326078501361 usec\nrounds: 4126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71043.37439836045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011687635040561774",
            "extra": "mean: 14.075907971272802 usec\nrounds: 13072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.3552478187246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000526186864853931",
            "extra": "mean: 3.3743286388897786 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.62061346723624,
            "unit": "iter/sec",
            "range": "stddev: 0.000036746165773479244",
            "extra": "mean: 7.3195396699035875 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.44403475240369,
            "unit": "iter/sec",
            "range": "stddev: 0.0011808351248973812",
            "extra": "mean: 25.35237599999987 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.71020064018886,
            "unit": "iter/sec",
            "range": "stddev: 0.00020251571592101023",
            "extra": "mean: 63.65291079999717 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.19838902033051,
            "unit": "iter/sec",
            "range": "stddev: 0.0006070586191566904",
            "extra": "mean: 10.504379436362527 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.4795710813525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051132230655444",
            "extra": "mean: 3.14980896753119 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.12422534627933,
            "unit": "iter/sec",
            "range": "stddev: 0.000015331669022591422",
            "extra": "mean: 2.9487719403675783 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493226.8679385411,
            "unit": "iter/sec",
            "range": "stddev: 2.681738000905573e-7",
            "extra": "mean: 2.0274645705728376 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.613090427711871,
            "unit": "iter/sec",
            "range": "stddev: 0.000543915516178828",
            "extra": "mean: 94.22326200000116 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.6383214464927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065849909899688065",
            "extra": "mean: 562.2278503404456 usec\nrounds: 1323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 125.01654892359103,
            "unit": "iter/sec",
            "range": "stddev: 0.010659044571255428",
            "extra": "mean: 7.998941009091451 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7060768.068303023,
            "unit": "iter/sec",
            "range": "stddev: 4.735555448242432e-9",
            "extra": "mean: 141.6276515991816 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5580255.584435747,
            "unit": "iter/sec",
            "range": "stddev: 9.997120405065752e-9",
            "extra": "mean: 179.20326136820304 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.18629033981978,
            "unit": "iter/sec",
            "range": "stddev: 0.00019582949417805447",
            "extra": "mean: 6.20400158035623 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13939.978035303302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018092731592185111",
            "extra": "mean: 71.73612450948474 usec\nrounds: 6883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.07652846177095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006392436443351608",
            "extra": "mean: 7.403210693877268 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.12890936817445,
            "unit": "iter/sec",
            "range": "stddev: 0.00015469660860477355",
            "extra": "mean: 6.167931455883203 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5480.704027420793,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033332322718416",
            "extra": "mean: 182.4583110120248 usec\nrounds: 2479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5706.458418690853,
            "unit": "iter/sec",
            "range": "stddev: 0.00005007792951994218",
            "extra": "mean: 175.2400397284267 usec\nrounds: 3096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.73484171607083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006346605998750918",
            "extra": "mean: 7.055428205883504 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 105.0351830225635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004566468023244157",
            "extra": "mean: 9.52061938888783 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 674.9631048293313,
            "unit": "iter/sec",
            "range": "stddev: 0.00007051695698236347",
            "extra": "mean: 1.4815624629628554 msec\nrounds: 540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.13507435212418,
            "unit": "iter/sec",
            "range": "stddev: 0.00002717107962930696",
            "extra": "mean: 5.021717059405276 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6178013.124323285,
            "unit": "iter/sec",
            "range": "stddev: 8.045634231206134e-9",
            "extra": "mean: 161.86433726748612 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.09162922967721,
            "unit": "iter/sec",
            "range": "stddev: 0.017995196708493352",
            "extra": "mean: 11.099810365851265 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4124005528822523,
            "unit": "iter/sec",
            "range": "stddev: 0.002310508995418105",
            "extra": "mean: 414.5248594000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.703039212329709,
            "unit": "iter/sec",
            "range": "stddev: 0.0003433735465051593",
            "extra": "mean: 175.3451033333325 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16664801918105016,
            "unit": "iter/sec",
            "range": "stddev: 0.08013127729222305",
            "extra": "mean: 6.000671384600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.58940724552237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260441100185459",
            "extra": "mean: 9.561197699997592 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.60026912230399,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038512586129186",
            "extra": "mean: 24.038306027781193 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6940154491084158,
            "unit": "iter/sec",
            "range": "stddev: 0.003700907467959665",
            "extra": "mean: 1.4408901146000062 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.41023540876853,
            "unit": "iter/sec",
            "range": "stddev: 0.00014485419291549118",
            "extra": "mean: 5.143762096154001 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 134.12274737531072,
            "unit": "iter/sec",
            "range": "stddev: 0.0005661177646129415",
            "extra": "mean: 7.455856814517354 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.1570988073677,
            "unit": "iter/sec",
            "range": "stddev: 0.01401182094245839",
            "extra": "mean: 8.18618000724561 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8833333359067772,
            "unit": "iter/sec",
            "range": "stddev: 0.008478086990633025",
            "extra": "mean: 1.1320754684000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1935553.5572701872,
            "unit": "iter/sec",
            "range": "stddev: 8.820449704909274e-8",
            "extra": "mean: 516.6480649651216 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5266.501404834442,
            "unit": "iter/sec",
            "range": "stddev: 0.000049512531490136756",
            "extra": "mean: 189.8793759139681 usec\nrounds: 2325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.99491963178863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006312243849425681",
            "extra": "mean: 6.993255442745772 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5619.118377633765,
            "unit": "iter/sec",
            "range": "stddev: 0.00005687687500039117",
            "extra": "mean: 177.96386066191124 usec\nrounds: 2842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8477.699305942415,
            "unit": "iter/sec",
            "range": "stddev: 0.000013728653792779131",
            "extra": "mean: 117.9565308832142 usec\nrounds: 4517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2001033.013119314,
            "unit": "iter/sec",
            "range": "stddev: 1.1556982699580936e-7",
            "extra": "mean: 499.74188004082356 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.98366434707094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003185132410675557",
            "extra": "mean: 3.5213293070894705 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2710078.51436859,
            "unit": "iter/sec",
            "range": "stddev: 1.5701533039749596e-8",
            "extra": "mean: 368.9929995378884 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146474.6292086938,
            "unit": "iter/sec",
            "range": "stddev: 3.022974011967824e-7",
            "extra": "mean: 6.827120883680288 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.9353080880214,
            "unit": "iter/sec",
            "range": "stddev: 0.000029170262400636342",
            "extra": "mean: 3.4254164271849232 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5603.472815547579,
            "unit": "iter/sec",
            "range": "stddev: 0.00006358077317452329",
            "extra": "mean: 178.460756912279 usec\nrounds: 2604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5308.608462387238,
            "unit": "iter/sec",
            "range": "stddev: 0.000052340797848612085",
            "extra": "mean: 188.37328220478858 usec\nrounds: 3338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.116139133683,
            "unit": "iter/sec",
            "range": "stddev: 0.000037636888254914294",
            "extra": "mean: 863.471258373137 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 733.4048645995994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005374027821815178",
            "extra": "mean: 1.3635033639243006 msec\nrounds: 632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.15540420961582,
            "unit": "iter/sec",
            "range": "stddev: 0.0002949285197287246",
            "extra": "mean: 12.172053799997684 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.95147374942087,
            "unit": "iter/sec",
            "range": "stddev: 0.00021417337135947535",
            "extra": "mean: 3.300858674241428 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.75765293186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000962321303538251",
            "extra": "mean: 10.229378161288608 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.35757717032482,
            "unit": "iter/sec",
            "range": "stddev: 0.000733142433096992",
            "extra": "mean: 9.491486297026025 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 290.1843327939608,
            "unit": "iter/sec",
            "range": "stddev: 0.0003132755596244771",
            "extra": "mean: 3.4460854256733042 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.605460701412326,
            "unit": "iter/sec",
            "range": "stddev: 0.0013868105053860724",
            "extra": "mean: 17.983845244440193 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.94988169360965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007803287043806471",
            "extra": "mean: 9.350173970877341 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.931121048966453,
            "unit": "iter/sec",
            "range": "stddev: 0.03367437431897236",
            "extra": "mean: 33.41004162069402 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.8565969219805,
            "unit": "iter/sec",
            "range": "stddev: 0.00023862995790871429",
            "extra": "mean: 3.1861684916203408 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5088.768124599639,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060964680681698",
            "extra": "mean: 196.5112136208162 usec\nrounds: 2467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12785.10056607224,
            "unit": "iter/sec",
            "range": "stddev: 0.000001673291010834978",
            "extra": "mean: 78.21604490571589 usec\nrounds: 4966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 762375.0573109821,
            "unit": "iter/sec",
            "range": "stddev: 2.2333715009814759e-7",
            "extra": "mean: 1.3116903424505502 usec\nrounds: 22076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8735085897339014,
            "unit": "iter/sec",
            "range": "stddev: 0.007146891854416221",
            "extra": "mean: 1.1448084331999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1758800.4586278019,
            "unit": "iter/sec",
            "range": "stddev: 9.14157374442132e-8",
            "extra": "mean: 568.5693309292118 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12039924.31138357,
            "unit": "iter/sec",
            "range": "stddev: 3.3169557605036407e-9",
            "extra": "mean: 83.05700053727195 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.28912475392735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003626784515279763",
            "extra": "mean: 3.23322069857971 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.56681006488464,
            "unit": "iter/sec",
            "range": "stddev: 0.00017369073472293326",
            "extra": "mean: 15.731479981129594 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.45437836369237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007695910093286097",
            "extra": "mean: 9.760441827583021 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.787282102558095,
            "unit": "iter/sec",
            "range": "stddev: 0.00048428167623415405",
            "extra": "mean: 17.92523246000087 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.68887910782175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008119308535108757",
            "extra": "mean: 9.286009923074472 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 300.24292427239294,
            "unit": "iter/sec",
            "range": "stddev: 0.000321958933209642",
            "extra": "mean: 3.330636358619923 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.1571321806799,
            "unit": "iter/sec",
            "range": "stddev: 0.0005113674054052526",
            "extra": "mean: 22.14489609302164 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.7689310494221,
            "unit": "iter/sec",
            "range": "stddev: 0.000031098077121901814",
            "extra": "mean: 1.8699665256125029 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5082.647403829519,
            "unit": "iter/sec",
            "range": "stddev: 0.000054993686563623716",
            "extra": "mean: 196.74786003187046 usec\nrounds: 2572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.17591395647972,
            "unit": "iter/sec",
            "range": "stddev: 0.0006751652738627282",
            "extra": "mean: 6.984414992482351 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5384.298651429229,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519162026083773",
            "extra": "mean: 185.72521041984848 usec\nrounds: 3455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 133.66562525505026,
            "unit": "iter/sec",
            "range": "stddev: 0.00019613103377379658",
            "extra": "mean: 7.481355046159986 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.80392720068138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007598378716166727",
            "extra": "mean: 42.00987473913025 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.59458737665484,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202974255702013",
            "extra": "mean: 13.055752818178751 msec\nrounds: 55"
          }
        ]
      }
    ]
  }
}