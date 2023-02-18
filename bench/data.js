window.BENCHMARK_DATA = {
  "lastUpdate": 1676687534106,
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
          "id": "1d8a333a00ca9b4574c946c5a92249c686afe91c",
          "message": "chore(deps): update mariadb docker tag to v10.11.2",
          "timestamp": "2023-02-17T21:25:05-05:00",
          "tree_id": "a14ae9b0e3059a1eb4a5e67703dbd356dd4bca35",
          "url": "https://github.com/ibis-project/ibis/commit/1d8a333a00ca9b4574c946c5a92249c686afe91c"
        },
        "date": 1676687433678,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4020205373711159,
            "unit": "iter/sec",
            "range": "stddev: 0.0966032137391872",
            "extra": "mean: 2.4874351109999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1696.7888511195551,
            "unit": "iter/sec",
            "range": "stddev: 0.004866800170680454",
            "extra": "mean: 589.3485210845132 usec\nrounds: 332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 556.0073887821866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005818408260806857",
            "extra": "mean: 1.7985372500000096 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 30.061758977851213,
            "unit": "iter/sec",
            "range": "stddev: 0.0314656179079378",
            "extra": "mean: 33.264853222220836 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 57.488586433812095,
            "unit": "iter/sec",
            "range": "stddev: 0.003614395622064032",
            "extra": "mean: 17.394757151514284 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 23.953390008611823,
            "unit": "iter/sec",
            "range": "stddev: 0.004944560047334386",
            "extra": "mean: 41.747744249998675 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.678672552825674,
            "unit": "iter/sec",
            "range": "stddev: 0.004639689881870368",
            "extra": "mean: 23.43090682500133 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 43.374290432392286,
            "unit": "iter/sec",
            "range": "stddev: 0.0025089388145170905",
            "extra": "mean: 23.055132200000017 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.93385776131116,
            "unit": "iter/sec",
            "range": "stddev: 0.0019905628362191004",
            "extra": "mean: 10.423848507041761 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 922.0433404334432,
            "unit": "iter/sec",
            "range": "stddev: 0.00046796734494919466",
            "extra": "mean: 1.0845477171712017 msec\nrounds: 891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.2658632584643943,
            "unit": "iter/sec",
            "range": "stddev: 0.052329776961568965",
            "extra": "mean: 789.9747412000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 238750.0739514324,
            "unit": "iter/sec",
            "range": "stddev: 0.000016405390334890362",
            "extra": "mean: 4.188480378035084 usec\nrounds: 1376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2484.04359056381,
            "unit": "iter/sec",
            "range": "stddev: 0.00019500131439057739",
            "extra": "mean: 402.5694250289011 usec\nrounds: 847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 50.42482525196637,
            "unit": "iter/sec",
            "range": "stddev: 0.0036673687024826097",
            "extra": "mean: 19.831501547167065 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10975.937117918244,
            "unit": "iter/sec",
            "range": "stddev: 0.00007207928216699453",
            "extra": "mean: 91.10839368489982 usec\nrounds: 4402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 138.21458025041127,
            "unit": "iter/sec",
            "range": "stddev: 0.0016579563355470827",
            "extra": "mean: 7.235126700730436 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.3149121571039,
            "unit": "iter/sec",
            "range": "stddev: 0.002211060006247404",
            "extra": "mean: 23.086737342857433 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.29089240740448,
            "unit": "iter/sec",
            "range": "stddev: 0.003365006432614251",
            "extra": "mean: 38.0359854090903 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.549604526287,
            "unit": "iter/sec",
            "range": "stddev: 0.0006573928988061334",
            "extra": "mean: 6.151968212498993 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 63.90757907456751,
            "unit": "iter/sec",
            "range": "stddev: 0.00198332037944886",
            "extra": "mean: 15.647596333342523 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 107.44037027214095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006163165156121976",
            "extra": "mean: 9.307488400003194 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 55.88204260190783,
            "unit": "iter/sec",
            "range": "stddev: 0.0018728883736986747",
            "extra": "mean: 17.894836219996364 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1099345.698327709,
            "unit": "iter/sec",
            "range": "stddev: 0.000005798794215410974",
            "extra": "mean: 909.6319761119449 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.94315347637288,
            "unit": "iter/sec",
            "range": "stddev: 0.001705523990075765",
            "extra": "mean: 9.906565879518153 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 31201.957286964585,
            "unit": "iter/sec",
            "range": "stddev: 0.00005674773564660499",
            "extra": "mean: 32.049271486496636 usec\nrounds: 8866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 107.80797129875562,
            "unit": "iter/sec",
            "range": "stddev: 0.0017741651921074173",
            "extra": "mean: 9.275751950000219 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 138.46111327941483,
            "unit": "iter/sec",
            "range": "stddev: 0.0019112143813873289",
            "extra": "mean: 7.222244399999859 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4447620507248463,
            "unit": "iter/sec",
            "range": "stddev: 0.07356155974613728",
            "extra": "mean: 2.248393266400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1280216.56358882,
            "unit": "iter/sec",
            "range": "stddev: 0.000009732589856826966",
            "extra": "mean: 781.1178424349617 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2723.433210161641,
            "unit": "iter/sec",
            "range": "stddev: 0.0002985355843884193",
            "extra": "mean: 367.18359615679657 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.917684824221617,
            "unit": "iter/sec",
            "range": "stddev: 0.0033391722871193522",
            "extra": "mean: 59.10974287499826 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3259.789263430732,
            "unit": "iter/sec",
            "range": "stddev: 0.00013148282703353555",
            "extra": "mean: 306.7682967173038 usec\nrounds: 1584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 55.69673618106518,
            "unit": "iter/sec",
            "range": "stddev: 0.002061338854000497",
            "extra": "mean: 17.954373425923706 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 60.01927377576205,
            "unit": "iter/sec",
            "range": "stddev: 0.002502395220486266",
            "extra": "mean: 16.661314559321376 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3166588.963272903,
            "unit": "iter/sec",
            "range": "stddev: 8.97933911939331e-7",
            "extra": "mean: 315.7972226896902 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1208394.669133366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012891088090252892",
            "extra": "mean: 827.5442002050356 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.8483940850293,
            "unit": "iter/sec",
            "range": "stddev: 0.001637531250909596",
            "extra": "mean: 9.818515146789046 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6088.697379389803,
            "unit": "iter/sec",
            "range": "stddev: 0.00010958098966223184",
            "extra": "mean: 164.23874232688797 usec\nrounds: 2965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.65155346325211,
            "unit": "iter/sec",
            "range": "stddev: 0.02409692613060778",
            "extra": "mean: 12.399017217388597 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.09974726179941,
            "unit": "iter/sec",
            "range": "stddev: 0.005332124246119979",
            "extra": "mean: 109.89316200000232 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 151.04528624669146,
            "unit": "iter/sec",
            "range": "stddev: 0.0008782137126282118",
            "extra": "mean: 6.620530999999374 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2974.2848208982896,
            "unit": "iter/sec",
            "range": "stddev: 0.00011387794933877703",
            "extra": "mean: 336.2152787028585 usec\nrounds: 1141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 200.28729989188528,
            "unit": "iter/sec",
            "range": "stddev: 0.00038980597435422806",
            "extra": "mean: 4.992827805556309 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.184288317926279,
            "unit": "iter/sec",
            "range": "stddev: 0.016348151631813867",
            "extra": "mean: 314.0419146000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 427.13835453754837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960462929762796",
            "extra": "mean: 2.341161802439105 msec\nrounds: 410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.98786874523093,
            "unit": "iter/sec",
            "range": "stddev: 0.0009304736348167644",
            "extra": "mean: 10.41798315841536 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 7369405.880269933,
            "unit": "iter/sec",
            "range": "stddev: 4.1750465628706177e-7",
            "extra": "mean: 135.69614922104418 nsec\nrounds: 80646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.27813177957857,
            "unit": "iter/sec",
            "range": "stddev: 0.0013788034094233067",
            "extra": "mean: 10.60691361956547 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 57.49332829531904,
            "unit": "iter/sec",
            "range": "stddev: 0.0014807773084431256",
            "extra": "mean: 17.393322488888113 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1182718.8656665992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021804479994809483",
            "extra": "mean: 845.5094689272449 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 5.962232559810542,
            "unit": "iter/sec",
            "range": "stddev: 0.00304060147954301",
            "extra": "mean: 167.72240766666377 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3128.2226155511657,
            "unit": "iter/sec",
            "range": "stddev: 0.00011429881998501483",
            "extra": "mean: 319.67034412089265 usec\nrounds: 1854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 156.44161185292882,
            "unit": "iter/sec",
            "range": "stddev: 0.0009487281952833491",
            "extra": "mean: 6.392161191359385 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 158.52687542487845,
            "unit": "iter/sec",
            "range": "stddev: 0.0011303445133266463",
            "extra": "mean: 6.308078660604603 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 50.25433802409734,
            "unit": "iter/sec",
            "range": "stddev: 0.002917058199479225",
            "extra": "mean: 19.898779673915758 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 141.94711262384766,
            "unit": "iter/sec",
            "range": "stddev: 0.0008293844954753463",
            "extra": "mean: 7.044877359710353 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 104.66442681728712,
            "unit": "iter/sec",
            "range": "stddev: 0.0014897855044815956",
            "extra": "mean: 9.554344588784705 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.936529143430572,
            "unit": "iter/sec",
            "range": "stddev: 0.0030221368684734172",
            "extra": "mean: 41.777151315793496 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7367.807334325153,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357579480553333",
            "extra": "mean: 135.72559034506756 usec\nrounds: 3625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4683689845534618,
            "unit": "iter/sec",
            "range": "stddev: 0.04499357306710312",
            "extra": "mean: 2.1350687875999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.28297561049949,
            "unit": "iter/sec",
            "range": "stddev: 0.004169273034284011",
            "extra": "mean: 29.168996628569793 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.466748844159522,
            "unit": "iter/sec",
            "range": "stddev: 0.0021547984505244965",
            "extra": "mean: 37.78325799999694 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7153.884360190723,
            "unit": "iter/sec",
            "range": "stddev: 0.00009651000842986603",
            "extra": "mean: 139.78419969502275 usec\nrounds: 4592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 145.56960393752362,
            "unit": "iter/sec",
            "range": "stddev: 0.0013249836581589833",
            "extra": "mean: 6.869565987341599 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.39702233647856,
            "unit": "iter/sec",
            "range": "stddev: 0.02012912578939626",
            "extra": "mean: 11.312598247863523 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 170.96146550573286,
            "unit": "iter/sec",
            "range": "stddev: 0.000808179153020685",
            "extra": "mean: 5.849271337501882 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 3676317.939541419,
            "unit": "iter/sec",
            "range": "stddev: 7.358452326395698e-7",
            "extra": "mean: 272.0112940298445 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 88197.08920002253,
            "unit": "iter/sec",
            "range": "stddev: 0.000038204658860866475",
            "extra": "mean: 11.338242668441088 usec\nrounds: 25063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 57.66993473451683,
            "unit": "iter/sec",
            "range": "stddev: 0.0028572535732596673",
            "extra": "mean: 17.34005777193079 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3282.8271611735954,
            "unit": "iter/sec",
            "range": "stddev: 0.00025388806162172494",
            "extra": "mean: 304.615488694356 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 95.42845337212597,
            "unit": "iter/sec",
            "range": "stddev: 0.0013140134938331802",
            "extra": "mean: 10.479054879999694 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 336.2992877413549,
            "unit": "iter/sec",
            "range": "stddev: 0.000670076592918253",
            "extra": "mean: 2.9735418314923465 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 257.3164598862098,
            "unit": "iter/sec",
            "range": "stddev: 0.00113620559720579",
            "extra": "mean: 3.886265186619693 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3223479.693381966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013673688575788983",
            "extra": "mean: 310.2237628652161 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.44883207663511,
            "unit": "iter/sec",
            "range": "stddev: 0.0015276340450129998",
            "extra": "mean: 13.080644567565969 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 193.61917047495794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006271221356256223",
            "extra": "mean: 5.164777834482751 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.8957447499289976,
            "unit": "iter/sec",
            "range": "stddev: 0.022169999634616713",
            "extra": "mean: 1.1163894625999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3331.3943437580215,
            "unit": "iter/sec",
            "range": "stddev: 0.00023517438308097533",
            "extra": "mean: 300.1746106322368 usec\nrounds: 2088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07692937936366485,
            "unit": "iter/sec",
            "range": "stddev: 0.12038918252519813",
            "extra": "mean: 12.998934974799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.3744274664525863,
            "unit": "iter/sec",
            "range": "stddev: 0.015175843377443888",
            "extra": "mean: 2.67074424179998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 82.10085015236521,
            "unit": "iter/sec",
            "range": "stddev: 0.0009778488425429947",
            "extra": "mean: 12.180141839507996 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 464168.30509450025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022083013219111386",
            "extra": "mean: 2.1543909591078383 usec\nrounds: 18383"
          }
        ]
      }
    ]
  }
}