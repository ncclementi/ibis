window.BENCHMARK_DATA = {
  "lastUpdate": 1678840647201,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "e40766470aeba0af326196c6ffad3540205af83e",
          "message": "chore(flake/nixpkgs): `1e21dd61` -> `1474943f`",
          "timestamp": "2023-03-15T00:32:27Z",
          "tree_id": "2a19b1e4eb24b16777effb0d136095e67f1c4fc1",
          "url": "https://github.com/ibis-project/ibis/commit/e40766470aeba0af326196c6ffad3540205af83e"
        },
        "date": 1678840560672,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 113.20314685865988,
            "unit": "iter/sec",
            "range": "stddev: 0.005336851011158194",
            "extra": "mean: 8.833676693180209 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.5041982944013,
            "unit": "iter/sec",
            "range": "stddev: 0.00004290709836182254",
            "extra": "mean: 3.430482325301063 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.20264207397847,
            "unit": "iter/sec",
            "range": "stddev: 0.0006529389852951874",
            "extra": "mean: 8.250645224298246 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11962.963279450383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016593612794937274",
            "extra": "mean: 83.59132905789069 usec\nrounds: 6549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1867896.5340804607,
            "unit": "iter/sec",
            "range": "stddev: 0.000001919645411452627",
            "extra": "mean: 535.3615587130397 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12620629.90252524,
            "unit": "iter/sec",
            "range": "stddev: 5.051492537027822e-9",
            "extra": "mean: 79.23534781731611 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5748.718658151637,
            "unit": "iter/sec",
            "range": "stddev: 0.00004500417098573316",
            "extra": "mean: 173.95180725743256 usec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5843181.483768509,
            "unit": "iter/sec",
            "range": "stddev: 8.436088955759535e-8",
            "extra": "mean: 171.1396441776324 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.7558978863465,
            "unit": "iter/sec",
            "range": "stddev: 0.00016133210091341096",
            "extra": "mean: 6.67753333333773 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1200.9909642424827,
            "unit": "iter/sec",
            "range": "stddev: 0.000017494854057823722",
            "extra": "mean: 832.6457315444862 usec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.756901034472,
            "unit": "iter/sec",
            "range": "stddev: 0.000023860259629398213",
            "extra": "mean: 3.060379128441124 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.1790502547166,
            "unit": "iter/sec",
            "range": "stddev: 0.0001500200022748517",
            "extra": "mean: 20.755909357140194 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.46161014534594,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197876661015228",
            "extra": "mean: 9.482123387096136 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.16566225123113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524065845252557",
            "extra": "mean: 8.32184487036982 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.0299084343797,
            "unit": "iter/sec",
            "range": "stddev: 0.00029612460295075826",
            "extra": "mean: 3.5838452071713056 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5471.483750949746,
            "unit": "iter/sec",
            "range": "stddev: 0.00006107864446346427",
            "extra": "mean: 182.76578082250887 usec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.5944739542902,
            "unit": "iter/sec",
            "range": "stddev: 0.00003062720175728818",
            "extra": "mean: 1.4585881858590826 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 8.710539091169926,
            "unit": "iter/sec",
            "range": "stddev: 0.28247313273441743",
            "extra": "mean: 114.80345700000625 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.31111291612582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650292040365983",
            "extra": "mean: 8.825259714289555 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.35701364542692,
            "unit": "iter/sec",
            "range": "stddev: 0.0007449307516688207",
            "extra": "mean: 26.76873503571439 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139155.64434099323,
            "unit": "iter/sec",
            "range": "stddev: 3.9187446513552577e-7",
            "extra": "mean: 7.186197906206055 usec\nrounds: 33334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.35765662815984,
            "unit": "iter/sec",
            "range": "stddev: 0.01708121944951727",
            "extra": "mean: 30.904586555558293 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.3499192285397,
            "unit": "iter/sec",
            "range": "stddev: 0.006652918176405581",
            "extra": "mean: 3.6989099270070516 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13551.319360609952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016131318910837712",
            "extra": "mean: 73.79355274488856 usec\nrounds: 7195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.51128903871285,
            "unit": "iter/sec",
            "range": "stddev: 0.00020679214070986807",
            "extra": "mean: 3.361216991903382 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.58892553260992,
            "unit": "iter/sec",
            "range": "stddev: 0.001607179059943271",
            "extra": "mean: 386.26062719999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.75417738253037,
            "unit": "iter/sec",
            "range": "stddev: 0.0006120677533690363",
            "extra": "mean: 9.45589124468185 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7315798.21312994,
            "unit": "iter/sec",
            "range": "stddev: 4.660691592443022e-9",
            "extra": "mean: 136.69048419155888 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7285.812415342497,
            "unit": "iter/sec",
            "range": "stddev: 0.00006906186683915676",
            "extra": "mean: 137.25305333063412 usec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.86842038088272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005827832044184373",
            "extra": "mean: 15.65719011111355 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.53658997258606,
            "unit": "iter/sec",
            "range": "stddev: 0.00020556654678504358",
            "extra": "mean: 3.2306358356166047 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.317670669380309,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575167022020649",
            "extra": "mean: 96.92110090000199 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5632.683285591456,
            "unit": "iter/sec",
            "range": "stddev: 0.00004585336019648012",
            "extra": "mean: 177.53527924391292 usec\nrounds: 2539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.7569860109886,
            "unit": "iter/sec",
            "range": "stddev: 0.004026026619895529",
            "extra": "mean: 4.019987603306248 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6422576.026733323,
            "unit": "iter/sec",
            "range": "stddev: 1.1384447318424618e-8",
            "extra": "mean: 155.70076490143538 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.31903033322361,
            "unit": "iter/sec",
            "range": "stddev: 0.0006857047454416756",
            "extra": "mean: 9.494960187499402 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.44468994335055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007326634806962706",
            "extra": "mean: 23.01777274285866 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.11449575362116,
            "unit": "iter/sec",
            "range": "stddev: 0.01390975595449216",
            "extra": "mean: 11.22151891836705 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.58179509711871,
            "unit": "iter/sec",
            "range": "stddev: 0.000741230072320944",
            "extra": "mean: 8.43299765517125 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.64663281208647,
            "unit": "iter/sec",
            "range": "stddev: 0.00019069736459747708",
            "extra": "mean: 3.219091708632525 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5796.910750682063,
            "unit": "iter/sec",
            "range": "stddev: 0.00004479949480347494",
            "extra": "mean: 172.50567466168772 usec\nrounds: 3919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6670211296992411,
            "unit": "iter/sec",
            "range": "stddev: 0.05337729636197903",
            "extra": "mean: 1.499202882000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.13789296523055,
            "unit": "iter/sec",
            "range": "stddev: 0.00020880870888692266",
            "extra": "mean: 3.2453003114188146 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.13776241201174,
            "unit": "iter/sec",
            "range": "stddev: 0.00022387948767974483",
            "extra": "mean: 3.38824822627747 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.5795986289586,
            "unit": "iter/sec",
            "range": "stddev: 0.00008877340268329822",
            "extra": "mean: 5.359642787037234 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.90875727528638,
            "unit": "iter/sec",
            "range": "stddev: 0.00006787921339928954",
            "extra": "mean: 8.481134252524257 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.63112100898596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000659826055089761",
            "extra": "mean: 8.958075409092265 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.78677964885655,
            "unit": "iter/sec",
            "range": "stddev: 0.014198378291858015",
            "extra": "mean: 15.435247830189832 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5450.166091402197,
            "unit": "iter/sec",
            "range": "stddev: 0.000044199476852961904",
            "extra": "mean: 183.48064687010742 usec\nrounds: 2492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.69121484941081,
            "unit": "iter/sec",
            "range": "stddev: 0.0001956158759374764",
            "extra": "mean: 13.948710481479843 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.9619468884671,
            "unit": "iter/sec",
            "range": "stddev: 0.00003250112544130994",
            "extra": "mean: 1.8451479956134165 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.12989586753598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007048425159501479",
            "extra": "mean: 8.761946135135728 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721351.6738049139,
            "unit": "iter/sec",
            "range": "stddev: 6.885070009631513e-7",
            "extra": "mean: 1.3862863791876987 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.39367500215361,
            "unit": "iter/sec",
            "range": "stddev: 0.0001017067915624863",
            "extra": "mean: 10.267607213485759 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.379035027818322,
            "unit": "iter/sec",
            "range": "stddev: 0.0005139473152025216",
            "extra": "mean: 65.0235855624981 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5507.7232448437035,
            "unit": "iter/sec",
            "range": "stddev: 0.00004703178292639429",
            "extra": "mean: 181.56322595478883 usec\nrounds: 2173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.479430682918913,
            "unit": "iter/sec",
            "range": "stddev: 0.00036043910582629656",
            "extra": "mean: 37.76516240000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9216422449047501,
            "unit": "iter/sec",
            "range": "stddev: 0.004193374447373759",
            "extra": "mean: 1.085019708599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5286.558942305216,
            "unit": "iter/sec",
            "range": "stddev: 0.00004574791232297761",
            "extra": "mean: 189.15896160687612 usec\nrounds: 2266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.0014585316623,
            "unit": "iter/sec",
            "range": "stddev: 0.00003879023973321307",
            "extra": "mean: 2.824847118279765 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17811816970644237,
            "unit": "iter/sec",
            "range": "stddev: 0.14907195206325946",
            "extra": "mean: 5.614250369000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8544341752786299,
            "unit": "iter/sec",
            "range": "stddev: 0.0029800947333884793",
            "extra": "mean: 1.1703651714000103 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893955.2285238756,
            "unit": "iter/sec",
            "range": "stddev: 9.336125497293408e-8",
            "extra": "mean: 527.9955856081071 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.36129648214747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653839370300307",
            "extra": "mean: 10.827045939023714 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68722.18487895025,
            "unit": "iter/sec",
            "range": "stddev: 5.403824258073491e-7",
            "extra": "mean: 14.551341779389528 usec\nrounds: 13813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498827.114966444,
            "unit": "iter/sec",
            "range": "stddev: 3.016010914912794e-7",
            "extra": "mean: 2.0047025712851836 usec\nrounds: 2061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 309.6678839812237,
            "unit": "iter/sec",
            "range": "stddev: 0.00022127092509176654",
            "extra": "mean: 3.2292661000022647 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.6373950764089,
            "unit": "iter/sec",
            "range": "stddev: 0.0003748972908278567",
            "extra": "mean: 17.656179254905894 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.23634421372184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006641521998819875",
            "extra": "mean: 9.87787545833226 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.95432834327013,
            "unit": "iter/sec",
            "range": "stddev: 0.000691007158108837",
            "extra": "mean: 10.004569252526315 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5353.0287905405785,
            "unit": "iter/sec",
            "range": "stddev: 0.00003085225563559424",
            "extra": "mean: 186.81012920519234 usec\nrounds: 1664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.75956943483202,
            "unit": "iter/sec",
            "range": "stddev: 0.00005116246124969619",
            "extra": "mean: 10.66557798876257 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1807358.8292194512,
            "unit": "iter/sec",
            "range": "stddev: 1.0347617388299201e-7",
            "extra": "mean: 553.2935595483674 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1733.4015640512557,
            "unit": "iter/sec",
            "range": "stddev: 0.00003914029084615391",
            "extra": "mean: 576.90036788869 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.25208952762223,
            "unit": "iter/sec",
            "range": "stddev: 0.00020979089646010296",
            "extra": "mean: 9.2376969753072 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9314348601488941,
            "unit": "iter/sec",
            "range": "stddev: 0.002831217713440712",
            "extra": "mean: 1.0736123831999862 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5729.5034402333695,
            "unit": "iter/sec",
            "range": "stddev: 0.000055787633535932374",
            "extra": "mean: 174.5351949660875 usec\nrounds: 2503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.66231097782907,
            "unit": "iter/sec",
            "range": "stddev: 0.000359820299007165",
            "extra": "mean: 7.425982761907606 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7934846598473968,
            "unit": "iter/sec",
            "range": "stddev: 0.0019389158407941004",
            "extra": "mean: 557.5737681999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1686936.1138198525,
            "unit": "iter/sec",
            "range": "stddev: 9.357282352059007e-8",
            "extra": "mean: 592.7906764267599 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11688.80384812881,
            "unit": "iter/sec",
            "range": "stddev: 0.00003135364729201774",
            "extra": "mean: 85.55195321889879 usec\nrounds: 4318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.7280809163601,
            "unit": "iter/sec",
            "range": "stddev: 0.000011324315737146618",
            "extra": "mean: 1.3249805132278114 msec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.556986613388246,
            "unit": "iter/sec",
            "range": "stddev: 0.0003061933282005014",
            "extra": "mean: 179.95364566665253 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.62642160043579,
            "unit": "iter/sec",
            "range": "stddev: 0.000638117580212816",
            "extra": "mean: 8.221897732757245 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.44916708464928,
            "unit": "iter/sec",
            "range": "stddev: 0.00011832033335298387",
            "extra": "mean: 6.271591243051865 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.4535387554907,
            "unit": "iter/sec",
            "range": "stddev: 0.000049746463926584426",
            "extra": "mean: 6.0807447961749155 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.78767151990583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551769780445488",
            "extra": "mean: 8.278990623933005 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.5113114031056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006834085878927545",
            "extra": "mean: 9.949128969071456 msec\nrounds: 97"
          }
        ]
      }
    ]
  }
}